export default function ProtectedRoute() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Protected Route</h1>
        <p className="text-gray-700">You can&apos;t see me if not logged in!</p>
      </div>
    </div>
  );
}
