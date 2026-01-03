export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-500">Page not found</p>

      <a
        href="/"
        className="mt-6 px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
