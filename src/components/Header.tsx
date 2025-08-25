import React, { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCart()

  const menuItems = [
    { name: "iPhone", link: "iphone" },
    { name: "Mac", link: "mac" },
    { name: "iPad", link: "ipad" },
    { name: "Acessórios", link: "acessorios" },
  ]

  return (
    <header className="border-b border-gray-100/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="cursor-pointer text-2xl font-semibold tracking-tight text-black transition-colors duration-200 hover:text-gray-700"
            >
              Infinite Core Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-sm font-medium text-gray-800 transition-all duration-200 hover:scale-110 hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Shopping Bag */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
            >
              <ShoppingBag className="h-5 w-5 text-gray-800" />
              {getTotalItems() > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100 md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-800" />
              ) : (
                <Menu className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  className="py-2 text-base font-medium text-gray-800 transition-colors duration-200 hover:text-black"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
