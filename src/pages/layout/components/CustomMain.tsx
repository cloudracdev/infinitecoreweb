import { Outlet } from "react-router-dom"

function CustomMain() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
    </>
  )
}

export default CustomMain
