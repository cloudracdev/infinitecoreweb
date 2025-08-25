import React from 'react';
import { MessageCircle } from 'lucide-react';

interface SeminovosSectionProps {
  variant?: 'home' | 'category';
}

const SeminovosSection: React.FC<SeminovosSectionProps> = ({ variant = 'home' }) => {
  const handleWhatsAppClick = () => {
    const message = variant === 'home' 
      ? 'Olá! Gostaria de ver os aparelhos seminovos disponíveis.'
      : 'Olá! Gostaria de ver os aparelhos seminovos desta categoria.';
    
    window.open(
      `https://wa.me/558496398187?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (variant === 'category') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
            Confira também nossos usados
          </h2>
          
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Ver disponíveis no WhatsApp</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50" style={{ display: 'none' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-6">
          Quer um Apple original com preço menor?
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Veja nossos modelos seminovos com garantia e procedência.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="font-medium">Ver disponíveis no WhatsApp</span>
        </button>
      </div>
    </section>
  );
};

export default SeminovosSection;