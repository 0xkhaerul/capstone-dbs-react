import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProfileCardView, ProfileDetail } from "./profile";
import {
  CheckDiabetesHistory,
  DiabetesHistoryDetail,
} from "./checkDiabetesHistory";
import { updateProfile } from "./api";

export function UpdateFormCard({ isOpen, onClose, data }: any) {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  // Initialize form data when data prop changes
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        noTelp: data.noTelp || "",
        email: data.email || "",
        age: data.age || null,
        tanggalLahir: data.tanggalLahir || "",
        jenisKelamin: data.jenisKelamin || "",
        kecamatan: data.kecamatan || "",
        kabupaten: data.kabupaten || "",
        kota: data.kota || "",
        negara: data.negara || "",
      });
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value === "" ? null : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Prepare the data in the format expected by the API
      const payload = {
        name: formData.name || null,
        noTelp: formData.noTelp || null,
        age: formData.age ? parseInt(formData.age) : null,
        kecamatan: formData.kecamatan || null,
        kabupaten: formData.kabupaten || null,
        kota: formData.kota || null,
        negara: formData.negara || null,
        tanggalLahir: formData.tanggalLahir || null,
        jenisKelamin: formData.jenisKelamin || null,
      };

      await updateProfile(payload);

      // Show success message
      alert("Profile updated successfully!");

      // Close the modal and refresh
      onClose();
      window.location.reload();
    } catch (error: any) {
      console.error("Error updating profile:", error);
      alert(
        error?.response?.data?.message ||
          "Failed to update profile. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-xl font-semibold text-gray-900">Edit Profile</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No Telepon
              </label>
              <input
                type="text"
                name="noTelp"
                value={formData.noTelp || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="08xxxxxxxx"
              />
            </div>

            {/* Email - Read Only */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-gray-50"
                placeholder="email@example.com"
                disabled
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Age"
              />
            </div>

            {/* Tanggal Lahir */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Lahir
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Kelamin
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>

            {/* Divider for location */}
            <div className="col-span-1 md:col-span-2 pt-4 pb-2">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Location
              </p>
              <div className="h-px bg-gray-100 mt-2"></div>
            </div>

            {/* Kecamatan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kecamatan
              </label>
              <input
                type="text"
                name="kecamatan"
                value={formData.kecamatan || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Kecamatan"
              />
            </div>

            {/* Kabupaten */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kabupaten
              </label>
              <input
                type="text"
                name="kabupaten"
                value={formData.kabupaten || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Kabupaten"
              />
            </div>

            {/* Kota */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kota
              </label>
              <input
                type="text"
                name="kota"
                value={formData.kota || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Kota"
              />
            </div>

            {/* Negara */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Negara
              </label>
              <input
                type="text"
                name="negara"
                value={formData.negara || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Negara"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
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
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [editFormData, setEditFormData] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const selectedId = searchParams.get("history");
  const isProfileOpen = searchParams.get("profile") === "open";

  const closeSidebar = () => setIsSidebarOpen(false);

  const handleSelectHistory = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("history", id);
    params.delete("profile");
    setSearchParams(params);
    closeSidebar();
  };

  const handleDeleteFromDetail = (deletedId: string) => {
    if (deletedId === selectedId) {
      const params = new URLSearchParams(searchParams);
      params.delete("history");
      setSearchParams(params);
    }
    setRefreshKey((k) => k + 1);
  };

  const handleProfileOpen = () => {
    const params = new URLSearchParams(searchParams);
    params.set("profile", "open");
    params.delete("history");
    setSearchParams(params);
    closeSidebar();
  };

  const handleOpenEditForm = (data: any) => {
    setEditFormData(data);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F3F7FD] md:p-6 md:gap-6">
      <UpdateFormCard
        isOpen={!!editFormData}
        onClose={() => setEditFormData(null)}
        data={editFormData}
      />

      {/* Mobile backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={[
          "fixed md:relative inset-y-0 left-0 z-40 md:z-auto",
          "w-[320px] flex-shrink-0",
          "bg-white md:rounded-xl p-4 flex flex-col gap-4 border-r md:border border-gray-200 shadow-md overflow-y-auto scrollbar-hide",
          "transform transition-transform duration-300 ease-in-out",
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <ProfileCardView onSelect={handleProfileOpen} />
        <CheckDiabetesHistory
          onSelect={handleSelectHistory}
          refreshKey={refreshKey}
        />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Content */}
        <div className="flex-1 md:bg-white md:rounded-xl md:border md:border-gray-200 md:shadow-lg overflow-hidden flex flex-col min-w-0">
          {!isProfileOpen && !selectedId && (
            <div className="flex items-center justify-center flex-1 text-gray-400 text-lg p-6 text-center">
              Pilih menu di sidebar
            </div>
          )}
          {isProfileOpen && <ProfileDetail onSelect={handleOpenEditForm} />}
          {selectedId && (
            <DiabetesHistoryDetail
              id={selectedId}
              onDelete={handleDeleteFromDetail}
            />
          )}
        </div>
      </div>

      {/* Mobile sidebar tab button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 md:hidden w-6 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-full shadow-md flex items-center justify-center transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
