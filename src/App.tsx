import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryButtons from './components/CategoryButtons';
import CategoryPage from './components/CategoryPage';
import VideoSection from './components/VideoSection';
import SeminovosSection from './components/SeminovosSection';
import TradeInSection from './components/TradeInSection';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [currentView, setCurrentView] = useState<'home' | string>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategorySelect = (category: string) => {
    setIsTransitioning(true);
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Wait for smooth transition then load new page
    setTimeout(() => {
      setCurrentView(category);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToHome = () => {
    setIsTransitioning(true);
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Wait for smooth transition then load home
    setTimeout(() => {
      setCurrentView('home');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <CartProvider>
      {/* Show loading state during transitions */}
      {isTransitioning ? (
        <div className="min-h-screen bg-white">
          <Header onCategorySelect={handleCategorySelect} onLogoClick={handleBackToHome} />
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-black"></div>
          </div>
        </div>
      ) : currentView !== 'home' ? (
        <>
          <CategoryPage 
            category={currentView} 
            onBack={handleBackToHome} 
            onCategorySelect={handleCategorySelect}
          />
          <Footer />
          <Cart />
        </>
      ) : (
        <div className="min-h-screen bg-white">
          <Header onCategorySelect={handleCategorySelect} onLogoClick={handleBackToHome} />
          <Hero />
          <CategoryButtons onCategorySelect={handleCategorySelect} />
          <VideoSection />
          <SeminovosSection variant="home" />
          <TradeInSection />
          <Footer />
          <Cart />
        </div>
      )}
    </CartProvider>
  );
}

export default App;