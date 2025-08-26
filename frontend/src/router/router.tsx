import Acessorios from "@/pages/acessorios"
import Home from "@/pages/home"
import Ipad from "@/pages/iPad"
import Iphone from "@/pages/iPhone"
import Layout from "@/pages/layout"
import Mac from "@/pages/mac"
import { createBrowserRouter } from "react-router-dom"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "iphone",
        element: <Iphone />,
      },
      {
        path: "mac",
        element: <Mac />,
      },
      {
        path: "ipad",
        element: <Ipad />,
      },
      {
        path: "acessorios",
        element: <Acessorios />,
      },
    ],
  },
])

export default AppRouter
