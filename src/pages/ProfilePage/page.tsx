import { useEffect } from "react";
import ProfileCardView from "./profile";
import ChatHistory from "./chatHistory";
import {
  CheckDiabetesHistory,
  DiabetesHistoryDetail,
} from "./checkDiabetesHistory";
import { getAllCheckHistory } from "./api";
import { useState } from "react";

export function ProfilePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    getAllCheckHistory()
      .then((res) =>
        console.log("getAllCheckHistory response:", res?.data ?? res)
      )
      .catch((err) => console.error("getAllCheckHistory error:", err));
  }, []);

  const handleSelectHistory = (id: string) => {
    console.log("ID diterima di ProfilePage:", id);
    setSelectedId(id);
  };

  const handleDeleteFromDetail = (deletedId: string) => {
    if (deletedId === selectedId) setSelectedId(null);
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="flex min-h-screen bg-[#F3F7FD] p-6 gap-6">
      {/* Sidebar */}
      <div className="w-[320px] bg-white rounded-xl p-4 flex flex-col gap-4 border border-gray-200 shadow-md hover:shadow-md transition">
        {/* Profile preview 1 */}
        <ProfileCardView />
        {/* Profile preview 2 */}
        <ChatHistory />
        {/* Frames */}
        <CheckDiabetesHistory
          onSelect={handleSelectHistory}
          refreshKey={refreshKey}
        />
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 text-lg">
        <DiabetesHistoryDetail
          id={selectedId}
          onDelete={handleDeleteFromDetail}
        />
      </div>
    </div>
  );
}
