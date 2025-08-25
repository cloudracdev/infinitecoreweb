import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import AppRouter from "./router/router"

function App() {
  return (
    <StrictMode>
      <CartProvider>
        <RouterProvider router={AppRouter} />
      </CartProvider>
    </StrictMode>
  )
}

export default App
