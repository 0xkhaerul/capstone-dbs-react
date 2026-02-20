import { useState } from "react";
import {
  getAllCheckHistory,
  getCheckHistroyById,
  unSaveCheckHistory,
} from "./api";
import { useEffect } from "react";

type HistoryItem = {
  id: string;
  userId: string;
  hypertension: boolean;
  heartDisease: boolean;
  bmi: number;
  bloodGlucoseLevel: number;
  hba1cLevel: number;
  smokingHistory: string;
  predictionResult: string;
  gender: string;
  age: number;
  isSaved: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export function CheckDiabetesList({ isOpen, onSelect, refreshKey }: any) {
  const [data, setData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const res = await getAllCheckHistory();
        setData(res.data.data || res.data);
      } catch (error) {
        console.error("Error fetching history:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchHistory();
    }
  }, [refreshKey, isOpen]);

  const formatDateTime = (iso: string) => {
    return new Date(iso).toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-2">
      {isOpen && (
        <div className="flex flex-col gap-2">
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <svg
                className="animate-spin h-5 w-5 text-gray-500"
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
              <span className="ml-2 text-gray-500">Loading history...</span>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No diabetes check history found.
            </div>
          ) : (
            data.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className="bg-white rounded-lg h-10 flex items-center px-4 text-gray-700 text-sm border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <span>Check History</span>
                <span className="text-gray-500 text-xs ml-auto">
                  {formatDateTime(item.createdAt)}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export function DiabetesHistoryDetail({ id, onDelete }: any) {
  const [item, setItem] = useState<HistoryItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setItem(null);
      setError(null);
      return;
    }

    let cancelled = false;
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getCheckHistroyById(id);
        const found: HistoryItem = res.data.data || res.data;
        if (!cancelled) setItem(found);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchDetail();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const handleDelete = async (idToDelete: string) => {
    try {
      await unSaveCheckHistory(idToDelete);
      if (onDelete) onDelete(idToDelete);
      setItem(null);
    } catch (e) {
      console.error("Error deleting history:", e);
    }
  };

  const formatDateTime = (iso?: string) => {
    if (!iso) return "-";
    return new Date(iso).toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!id)
    return (
      <div className="text-gray-500">
        Pilih riwayat pemeriksaan untuk melihat detail
      </div>
    );

  if (loading)
    return (
      <div className="p-6 flex items-center justify-center flex-col gap-4 text-gray-500">
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
        <span>Loading detail...</span>
      </div>
    );
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!item) return <div className="text-gray-500">Data tidak ditemukan.</div>;

  return (
    <div className="p-6 w-full h-full overflow-y-auto scrollbar-hide space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Detail Pemeriksaan</h3>
          <p className="text-xs text-gray-500 mt-1">History ID: {item.id}</p>
          <p className="text-xs text-gray-500">User ID: {item.userId}</p>
        </div>

        <div className="text-xs text-gray-600">
          Status:{" "}
          <span
            className={`px-2 py-1 rounded-full text-white ${
              item.isSaved ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            {item.isSaved ? "Saved" : "Not saved"}
          </span>
        </div>
      </div>

      {/* Form body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {[
          { label: "Gender", value: item.gender },
          { label: "Age", value: item.age },
          { label: "BMI", value: item.bmi },
          { label: "Blood Glucose", value: item.bloodGlucoseLevel },
          { label: "HbA1c", value: item.hba1cLevel },
          { label: "Hypertension", value: item.hypertension ? "Yes" : "No" },
          { label: "Heart Disease", value: item.heartDisease ? "Yes" : "No" },
          { label: "Smoking History", value: item.smokingHistory },
          { label: "Prediction", value: item.predictionResult },
        ].map((field) => (
          <div key={field.label} className="flex flex-col gap-1">
            <label className="text-gray-600 text-xs">{field.label}</label>
            <input
              disabled
              value={field.value ?? "-"}
              className="bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-500 border-t pt-4">
        <button onClick={() => handleDelete(item.id)}>Delete</button>
        <div>Created: {formatDateTime(item.createdAt)}</div>
      </div>
    </div>
  );
}

export function CheckDiabetesHistory({ onSelect, refreshKey }: any) {
  const [isDrawdownOpen, setIsDrawdownOpen] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem("historyListOpen");
      return raw === "true";
    } catch (e) {
      return false;
    }
  });

  const toggle = () => {
    setIsDrawdownOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("historyListOpen", String(next));
      } catch (e) {
        // ignore storage errors
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-2">
      <button
        onClick={toggle}
        className="bg-white rounded-lg h-12 flex items-center px-4 text-black text-sm border border-gray-200 shadow-sm"
      >
        Check Diabetes History
      </button>

      <CheckDiabetesList
        isOpen={isDrawdownOpen}
        onSelect={onSelect}
        refreshKey={refreshKey}
      />
    </div>
  );
}
