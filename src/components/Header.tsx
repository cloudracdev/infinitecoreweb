import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onCategorySelect: (category: string) => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCategorySelect, onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCart();

  const menuItems = [
    { name: 'iPhone', category: 'iphone' },
    { name: 'Mac', category: 'mac' },
    { name: 'iPad', category: 'ipad' },
    { name: 'Acessórios', category: 'acessorios' }
  ];

  const handleMenuClick = (category: string) => {
    if (category === 'contato') {
      // Scroll to contact section
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onCategorySelect(category);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={onLogoClick}
              className="text-2xl font-semibold text-black tracking-tight hover:text-gray-700 transition-colors duration-200"
            >
              Infinite Core Store
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.category)}
                className="text-gray-800 hover:text-black transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Shopping Bag */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <ShoppingBag className="w-5 h-5 text-gray-800" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-800" />
              ) : (
                <Menu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.category)}
                  className="text-gray-800 hover:text-black transition-colors duration-200 text-base font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;