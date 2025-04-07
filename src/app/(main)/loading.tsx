export default function MainLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-gradient backdrop-blur-sm z-50">
      <div className="relative flex flex-col items-center animate-float">
        {/* Glowing circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-blue-500/20 dark:bg-blue-500/40 rounded-full animate-ping" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-purple-500/20 dark:bg-purple-500/40 rounded-full animate-pulse" />
        </div>
        
        {/* Main spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slow [animation-direction:reverse]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin-fast" />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-xl font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-glow">
          Loading...
        </div>
      </div>
    </div>
  );
} 