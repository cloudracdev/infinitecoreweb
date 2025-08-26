import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import AppRouter from "./router/router"
import { Bounce, ToastContainer } from "react-toastify"

function App() {
  return (
    <StrictMode>
      <CartProvider>
        <RouterProvider router={AppRouter} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </CartProvider>
    </StrictMode>
  )
}

export default App
