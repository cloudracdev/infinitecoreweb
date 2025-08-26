import Cart from "@/components/Cart"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import CustomMain from "./components/CustomMain"
import { ScrollRestoration } from "react-router-dom"

function Layout() {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <Header />
      <CustomMain />
      <Footer />
      <Cart />
    </>
  )
}

export default Layout
