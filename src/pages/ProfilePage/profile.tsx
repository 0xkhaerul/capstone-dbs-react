import { useEffect, useState } from "react";
import { getProfile } from "./api";

export function ProfileCardView({ onSelect }: any) {
  const user = {
    name: "Ilman Khaerul",
    email: "ilman@example.com",
  };

  return (
    <button
      onClick={() => onSelect()}
      className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm max-w-md"
    >
      {/* Avatar */}

      <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
        {user.name.charAt(0)}
      </div>

      {/* User info */}
      <div className="flex flex-col">
        <span className="text-black font-medium">{user.name}</span>
        <span className="text-gray-500 text-sm">{user.email}</span>
      </div>
    </button>
  );
}

export function ProfileDetail({ onSelect, refreshKey }: any) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProfile()
      .then((res) => {
        const userData = res.data.user || res.data;
        setUser(userData);
        console.log("Profile data:", userData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [refreshKey]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500 flex items-center justify-center flex-col gap-4">
        <svg
          className="animate-spin h-8 w-8 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Loading details...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-8 text-center text-red-500">
        Failed to load profile data.
      </div>
    );
  }

  return (
    <div className="p-8 w-full max-w-5xl mx-auto h-full overflow-y-auto scrollbar-hide">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-8 shadow-xl text-white overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center text-4xl font-bold shadow-lg">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
            <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
            <p className="text-blue-100 mb-4 flex items-center justify-center md:justify-start gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              {user.email}
            </p>
            <div className="inline-flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs border border-white/20">
                User ID: {user.id}
              </span>
            </div>
          </div>
          <button
            onClick={() => onSelect(user)}
            className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Personal Information
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Umur</span>
              <span className="text-gray-900 font-medium">
                {user.age ? `${user.age} Tahun` : "-"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Tanggal Lahir</span>
              <span className="text-gray-900 font-medium">
                {formatDate(user.tanggalLahir)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 text-sm">Jenis Kelamin</span>
              <span className="text-gray-900 font-medium">
                {user.jenisKelamin || "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Contact Details
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Email</span>
              <span className="text-gray-900 font-medium">{user.email}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 text-sm">No. Telepon</span>
              <span className="text-gray-900 font-medium">
                {user.noTelp || "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Location</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Kecamatan</span>
              <span className="text-gray-900 font-medium">
                {user.kecamatan || "-"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Kabupaten</span>
              <span className="text-gray-900 font-medium">
                {user.kabupaten || "-"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Kota</span>
              <span className="text-gray-900 font-medium">
                {user.kota || "-"}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 text-sm">Negara</span>
              <span className="text-gray-900 font-medium">
                {user.negara || "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Account Activity
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-600 text-sm">Member Since</span>
              <span className="text-gray-900 font-medium">
                {formatDate(user.createdAt)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 text-sm">Last Updated</span>
              <span className="text-gray-900 font-medium">
                {formatDate(user.updatedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
