import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const handlePlayClick = () => {
    window.open('https://www.youtube.com/watch?v=WjAhq_UYHWg', '_blank');
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6">
            Confiança e qualidade
            <br className="hidden sm:block" />
            <span className="text-gray-600"> em cada Apple.</span>
          </h2>
        </div>

        {/* Video Thumbnail with Play Button */}
        <div className="max-w-5xl mx-auto mb-20">
          <div 
            className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={handlePlayClick}
          >
            {/* Cover Image */}
            <img
              src="https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/infinite%20core%20site%20apresentac%CC%A7a%CC%83o-Cover.jpg"
              alt="Apresentação InfiniteCore"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ filter: 'brightness(1.2) saturate(1.1)' }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-black ml-0.5 sm:ml-0.5 md:ml-1" fill="currentColor" />
              </div>
            </div>

            {/* YouTube Badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              YouTube
            </div>
          </div>
          
          {/* Video Description */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-black mb-2">
              Apresentação InfiniteCore
            </h3>
            <p className="text-gray-600">
              Conheça nossa história e compromisso com a excelência Apple
            </p>
          </div>
        </div>

        {/* Video Highlights Carousel */}
        <div className="text-center mb-12" style={{ display: 'none' }}>
          <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Experiência visual pura
          </h3>
          <p className="text-gray-600 text-lg">
            Unboxings, reviews e demonstrações exclusivas
          </p>
        </div>

        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide" style={{ display: 'none' }}>
          {[1, 2, 3, 4, 5].map((video) => (
            <div
              key={video}
              className="flex-shrink-0 w-64 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={`https://images.pexels.com/photos/${788946 + video}/pexels-photo-${788946 + video}.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&dpr=2`}
                  alt={`Video ${video}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Play className="w-4 h-4 text-black ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-medium text-black text-sm mb-1">
                  Unboxing iPhone 15 Pro
                </h4>
                <p className="text-gray-600 text-xs">
                  Experiência premium revelada
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;