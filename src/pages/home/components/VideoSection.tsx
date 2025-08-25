import { Play } from "lucide-react"

const YOUTUBE_LINK = "https://www.youtube.com/embed/WjAhq_UYHWg"

const VideoSection = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-12 bg-gray-100 py-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-black sm:text-5xl">
          Confiança e qualidade
          <br className="hidden sm:block" />
          <span className="text-gray-600"> em cada Apple.</span>
        </h2>
      </div>

      <div className="w-full max-w-3xl px-4 sm:max-w-4xl lg:max-w-5xl">
        <div className="aspect-video overflow-hidden rounded-3xl">
          <iframe
            src={YOUTUBE_LINK}
            title="Apresentação InfiniteCore"
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-black">Apresentação InfiniteCore</h3>
          <p className="text-gray-600">
            Conheça nossa história e compromisso com a excelência Apple
          </p>
        </div>
      </div>

      {/* Video Highlights Carousel */}
      <div className="mb-12 text-center" style={{ display: "none" }}>
        <h3 className="mb-4 text-2xl font-semibold text-black sm:text-3xl">
          Experiência visual pura
        </h3>
        <p className="text-lg text-gray-600">Unboxings, reviews e demonstrações exclusivas</p>
      </div>

      <div
        className="scrollbar-hide flex space-x-6 overflow-x-auto pb-6"
        style={{ display: "none" }}
      >
        {[1, 2, 3, 4, 5].map((video) => (
          <div
            key={video}
            className="group w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={`https://images.pexels.com/photos/${788946 + video}/pexels-photo-${788946 + video}.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&dpr=2`}
                alt={`Video ${video}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/10">
                <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm">
                  <Play className="ml-0.5 h-4 w-4 text-black" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="mb-1 text-sm font-medium text-black">Unboxing iPhone 15 Pro</h4>
              <p className="text-xs text-gray-600">Experiência premium revelada</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoSection
