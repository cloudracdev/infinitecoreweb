import { StrictMode, useState } from "react"
import Cart from "./components/Cart"
import CategoryPage from "./components/CategoryPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { CartProvider } from "./contexts/CartContext"
import Hero from "./pages/home/components/Hero"
import CategoryButtons from "./pages/home/components/CategoryButtons"
import VideoSection from "./pages/home/components/VideoSection"
import SeminovosSection from "./pages/home/components/SeminovosSection"
import TradeInSection from "./pages/home/components/TradeInSection"
import { RouterProvider } from "react-router-dom"
import AppRouter from "./router/router"

function App() {
  // const [currentView, setCurrentView] = useState<"home" | string>("iphone")
  // const [isTransitioning, setIsTransitioning] = useState(false)

  // const handleCategorySelect = (category: string) => {
  //   setIsTransitioning(true)

  //   // Force scroll to top immediately
  //   window.scrollTo(0, 0)

  //   // Wait for smooth transition then load new page
  //   setTimeout(() => {
  //     setCurrentView(category)
  //     setIsTransitioning(false)
  //   }, 300)
  // }

  // const handleBackToHome = () => {
  //   setIsTransitioning(true)

  //   // Force scroll to top immediately
  //   window.scrollTo(0, 0)

  //   // Wait for smooth transition then load home
  //   setTimeout(() => {
  //     setCurrentView("home")
  //     setIsTransitioning(false)
  //   }, 300)
  // }

  return (
  //   <CartProvider>
  //     {/* Show loading state during transitions */}
  //     {isTransitioning ? (
  //       <div className="min-h-screen bg-white">
  //         <Header />
  //         <div className="flex min-h-screen items-center justify-center">
  //           <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-black"></div>
  //         </div>
  //       </div>
  //     ) : currentView !== "home" ? (
  //       <>
  //         <CategoryPage
  //           category={currentView}
  //           onBack={handleBackToHome}
  //           onCategorySelect={handleCategorySelect}
  //         />
  //         <Footer />
  //         <Cart />
  //       </>
  //     ) : (
  //       <div className="min-h-screen bg-white">
  //         <Header />
  //         <Hero />
  //         <CategoryButtons />
  //         <VideoSection />
  //         <SeminovosSection variant="home" />
  //         <TradeInSection />
  //         <Footer />
  //         <Cart />
  //       </div>
  //     )}
  //   </CartProvider>
    <StrictMode>
      <CartProvider>
        <RouterProvider router={AppRouter} />
      </CartProvider>
    </StrictMode>
  )
}

export default App
