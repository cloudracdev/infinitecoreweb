import React from 'react';
import { Smartphone, Monitor, Tablet, Headphones } from 'lucide-react';

interface CategoryButtonsProps {
  onCategorySelect: (category: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 'iphone',
      name: 'Ver todos os iPhones',
      icon: Smartphone,
      description: 'Linha completa iPhone'
    },
    {
      id: 'mac',
      name: 'Ver todos os Macs',
      icon: Monitor,
      description: 'MacBook, iMac e Mac Studio'
    },
    {
      id: 'ipad',
      name: 'Ver todos os iPads',
      icon: Tablet,
      description: 'iPad Pro, Air e mini'
    },
    {
      id: 'acessorios',
      name: 'Ver todos os acessórios',
      icon: Headphones,
      description: 'AirPods, Apple Watch e mais'
    }
  ];

  return (
    <section id="category-buttons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6">
            Explore nossa coleção
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubra produtos Apple premium organizados por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-left"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 rounded-full p-6 mb-6 group-hover:bg-black transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-900">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryButtons;