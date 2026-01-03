import { MessageCircle } from "lucide-react";

export default function ChatHistory() {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
        <MessageCircle className="w-6 h-6 text-blue-600" />
      </div>
      <span className="text-black font-medium">Chat History</span>
    </div>
  );
}
