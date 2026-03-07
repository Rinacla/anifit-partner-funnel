export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 animate-pulse">
        {/* Hero skeleton */}
        <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4" />
        <div className="h-5 bg-gray-100 rounded-lg w-2/3 mx-auto mb-12" />

        {/* Content blocks */}
        <div className="space-y-6">
          <div className="h-40 bg-gray-100 rounded-2xl" />
          <div className="h-4 bg-gray-100 rounded w-5/6" />
          <div className="h-4 bg-gray-100 rounded w-4/6" />
          <div className="h-32 bg-gray-100 rounded-2xl" />
        </div>
      </div>
    </main>
  );
}
