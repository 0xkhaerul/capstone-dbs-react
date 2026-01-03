import { useState } from "react";
import { getAllCheckHistory, getCheckHistroyById } from "./api";
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

export function CheckDiabetesList({ isOpen, onSelect }: any) {
  const [data, setData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getAllCheckHistory();
        console.log("API response:", res.data);

        setData(res.data.data || res.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

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
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="bg-white rounded-lg h-10 flex items-center px-4 text-gray-700 text-sm border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <span>Check History</span>
              <span className="text-gray-500 text-xs">
                {formatDateTime(item.createdAt)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function DiabetesHistoryDetail({ id }: any) {
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

  if (loading) return <div>Loading detail...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!item) return <div className="text-gray-500">Data tidak ditemukan.</div>;

  return (
    <div className="p-6 w-full space-y-6">
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
        <div></div>
        <div>Created: {formatDateTime(item.createdAt)}</div>
      </div>
    </div>
  );
}

export function CheckDiabetesHistory({ onSelect }: any) {
  const [isDrawdownOpen, setIsDrawdownOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem("checkHistoryOpen");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("checkHistoryOpen", JSON.stringify(isDrawdownOpen));
  }, [isDrawdownOpen]);

  return (
    <div className="flex flex-col gap-3 mt-2">
      <button
        onClick={() => setIsDrawdownOpen((prev) => !prev)}
        className="bg-white rounded-lg h-12 flex items-center px-4 text-black text-sm border border-gray-200 shadow-sm"
      >
        Check Diabetes History
      </button>
      <CheckDiabetesList isOpen={isDrawdownOpen} onSelect={onSelect} />
    </div>
  );
}
