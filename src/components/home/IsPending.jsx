export function IsPending() {
  return (
    <section className="mb-6 sm:mb-10 lg:mb-14 font-serif px-1 sm:px-0">
      {/* Skeleton Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-5 lg:mb-7 border-b-2 border-[#b59775] pb-2 sm:pb-3 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="w-1.5 sm:w-2 h-4 sm:h-5 lg:h-7 bg-[#704328]/60 rounded-sm animate-pulse" />
          <div className="h-4 sm:h-6 lg:h-7 w-28 sm:w-36 bg-[#ebdccb] rounded-md animate-pulse" />
        </div>
        <div className="h-4 sm:h-6 w-28 sm:w-36 bg-[#ebdccb] border border-[#c2a78a] rounded-md animate-pulse shrink-0" />
      </div>

      <div className="relative flex items-center gap-1.5 sm:gap-2.5 lg:gap-4">
        {/* Skeleton Left Arrow */}
        <div className="p-1.5 sm:p-2 lg:p-3 rounded-full shrink-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#ebd3b2]/60 rounded-full animate-pulse" />
        </div>

        {/* 4-Column Grid matching the loaded structure */}
        <div className="flex-1 grid grid-cols-4 gap-1.5 sm:gap-3 lg:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center w-full">
              {/* Dark Oak Wood Niche Box Skeleton */}
              <div 
                className="relative w-full h-32 sm:h-48 md:h-60 lg:h-76 rounded-md sm:rounded-lg p-1 sm:p-2.5 lg:p-4 border sm:border-2 lg:border-[3px] border-[#381e0d] shadow-[0_4px_12px_rgba(20,10,5,0.35)] flex items-center justify-center overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at center, #633f26 0%, #3d2312 60%, #241208 100%)'
                }}
              >
                {/* 3D Cavity Shadows */}
                <div className="absolute inset-0 shadow-[inset_0_12px_20px_rgba(0,0,0,0.65),inset_0_-8px_14px_rgba(0,0,0,0.4),inset_10px_0_16px_rgba(0,0,0,0.5),inset_-10px_0_16px_rgba(0,0,0,0.5)] pointer-events-none rounded-xs" />
                <div className="absolute inset-y-0 left-0 w-2 sm:w-4 lg:w-6 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-2 sm:w-4 lg:w-6 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-2 sm:h-4 lg:h-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Shimmering Book Placeholder */}
                <div className="relative h-24 sm:h-38 md:h-48 lg:h-60 w-16 sm:w-24 lg:w-34 bg-[#4a2612]/60 border border-[#8a4a25]/40 rounded-xs animate-pulse flex flex-col justify-between p-1.5 sm:p-2.5 z-10">
                  <div className="w-1/2 h-1.5 sm:h-2 bg-[#8a4a25]/50 rounded-xs" />
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="w-full h-1.5 sm:h-2 bg-[#8a4a25]/50 rounded-xs" />
                    <div className="w-3/4 h-1.5 sm:h-2 bg-[#8a4a25]/50 rounded-xs" />
                  </div>
                </div>

                {/* Realistic Wooden Shelf Floor Plank */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 sm:h-3 lg:h-4 bg-gradient-to-b from-[#8a5430] via-[#5c361c] to-[#2e190b] border-t border-[#a66a3f] shadow-[0_-2px_6px_rgba(0,0,0,0.5)] z-0" />
              </div>

              {/* Title & Author Tag Box (Parchment Paper Aesthetic) */}
              <div className="w-full mt-1.5 sm:mt-2 lg:mt-3 bg-[#fbf8f0] border border-[#d2be9b] p-1 sm:p-1.5 lg:p-2.5 rounded-xs sm:rounded-md shadow-[0_2px_6px_rgba(40,20,10,0.08)] flex flex-col items-center gap-1 sm:gap-1.5">
                <div className="h-2.5 sm:h-3.5 w-3/4 bg-[#e8dccb] rounded-xs animate-pulse" />
                <div className="h-2 sm:h-2.5 w-1/2 bg-[#f2e7d8] rounded-xs animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Skeleton Right Arrow */}
        <div className="p-1.5 sm:p-2 lg:p-3 rounded-full shrink-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#ebd3b2]/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}