import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VerifyOtpHandler } from "../authApi";

export default function VerifyTokenPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialEmail = (location.state as any)?.email || "";
  const [email, setEmail] = useState<string>(initialEmail);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      // try to read from query param if not in state
      const params = new URLSearchParams(window.location.search);
      const qEmail = params.get("email");
      if (qEmail) setEmail(qEmail);
    }
  }, [email]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      await VerifyOtpHandler({ email, otpCode: otp });
      setSuccessMessage("Verifikasi berhasil. Mengalihkan ke halaman login...");
      setTimeout(() => navigate("/login"), 800);
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || err?.message || "Verifikasi gagal";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/assets/images/background-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mx-auto mb-4 text-blue-600">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Verifikasi OTP
            </h2>
            <p className="text-sm text-gray-600">
              Masukkan kode verifikasi 6 digit yang kami kirim ke
            </p>
            <p className="text-sm font-medium text-blue-600 mt-1">
              {email || "(email tidak tersedia)"}
            </p>
          </div>

          {/* Messages */}
          {errorMessage ? (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errorMessage}
            </div>
          ) : null}
          {successMessage ? (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          ) : null}

          {/* Form */}
          <form id="otpForm" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="otpCode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kode OTP
              </label>
              <input
                id="otpCode"
                name="otpCode"
                type="text"
                value={otp}
                onChange={(ev) => setOtp(ev.target.value)}
                maxLength={6}
                placeholder="000000"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F4F8FE] text-black text-center"
              />
            </div>

            <div>
              <button
                type="submit"
                id="submitButton"
                disabled={loading}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                {loading ? "Memverifikasi..." : "Verifikasi"}
              </button>
            </div>

            {/* Resend Section */}
            <div id="resendContainer" className="text-center">
              <p className="text-sm text-gray-500">
                Tidak menerima kode?
                <a
                  href="#"
                  id="resendLink"
                  className="text-blue-600 hover:text-blue-500 font-medium ml-1"
                >
                  Kirim ulang
                </a>
                <span
                  id="countdownText"
                  className="text-gray-500 font-medium ml-1 hidden"
                >
                  Kirim ulang dalam 00:00
                </span>
              </p>
            </div>
          </form>

          {/* Back to Register */}
          <div className="mt-6 text-center">
            <a
              href="/register"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Kembali ke halaman registrasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
