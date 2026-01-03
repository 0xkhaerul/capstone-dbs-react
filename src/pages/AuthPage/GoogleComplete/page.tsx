import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { completeGoogleRegister, saveTokenToLocalStorage } from "../authApi";

function decodeJwt(token: string) {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const payload = parts[1];
    // Add padding
    const padded = payload.padEnd(
      payload.length + ((4 - (payload.length % 4)) % 4),
      "="
    );
    const json = atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

export default function GoogleCompletePage() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");
    if (!t) {
      setError("Token tidak ditemukan");
      return;
    }
    setToken(t);
    const payload = decodeJwt(t);
    if (payload) {
      if (payload.email) setEmail(payload.email);
      if (payload.name) setName(payload.name);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const res = await completeGoogleRegister({ token, name });
      if (res.data && !res.data.error && res.data.token) {
        saveTokenToLocalStorage(res.data.token);
        navigate("/");
      } else {
        setError(res.data?.message || "Gagal menyelesaikan registrasi");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message || err.message || "Terjadi kesalahan"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-black text-xl font-semibold mb-4">
          Selesaikan Registrasi
        </h2>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-black block text-sm font-medium">
              Email
            </label>
            <input
              value={email}
              disabled
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-3">
            <label className="text-black block text-sm font-medium">
              Nama Lengkap
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white text-black w-full mt-1 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Memproses..." : "Selesaikan Registrasi"}
          </button>
        </form>
      </div>
    </div>
  );
}
