export default function ProfileCardView() {
  const user = {
    name: "Ilman Khaerul",
    email: "ilman@example.com",
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm max-w-md">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
        {user.name.charAt(0)}
      </div>

      {/* User info */}
      <div className="flex flex-col">
        <span className="text-black font-medium">{user.name}</span>
        <span className="text-gray-500 text-sm">{user.email}</span>
      </div>
    </div>
  );
}
