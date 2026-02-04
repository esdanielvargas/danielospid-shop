import { Link, Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <div className="size-full min-h-dvh bg-neutral-50 text-neutral-950">
      <div className="w-full min-h-20 flex items-center bg-neutral-950 text-neutral-50">
        <Link to="/account/" className="p-4 inline-block">Inicio</Link>
        <Link to="/account/dashboard" className="p-4 inline-block">Dashboard</Link>
        <Link to="/account/profile" className="p-4 inline-block">Profile</Link>
      </div>
      <Outlet />
    </div>
  )
}