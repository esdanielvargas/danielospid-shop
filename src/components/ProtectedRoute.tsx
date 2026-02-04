import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";
import { db } from "../firebase";

export const ProtectedRoute = () => {
    const authUser = useAuth(db);

    if (!authUser) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Outlet />
    )
}