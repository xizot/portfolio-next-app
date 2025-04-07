export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents Skeleton */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Skeleton */}
        <article className="lg:col-span-3">
          <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
          <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8" />
          <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8" />
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                style={{ width: `${Math.random() * 40 + 60}%` }}
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
} 