import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleExploreClick = () => {
    const categorySection = document.getElementById('category-buttons');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6">
              Sua experiência Apple,
              <br />
              <span className="text-gray-600"> elevada.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Descubra a coleção mais exclusiva de produtos Apple com qualidade garantida e suporte especializado.
            </p>

            <button 
              onClick={handleExploreClick}
              className="group inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-base font-medium">Explorar</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* MacBook Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="MacBook"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-200/50 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;