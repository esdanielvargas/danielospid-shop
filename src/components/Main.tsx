import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="w-full p-6 flex flex-col items-center justify-start">
        <Outlet />
    </main>
  )
}