import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { ProtectedRoute } from "@/components";
import { privateRoutes } from "./privateRoutes";

export default function AppRoutes() {
    return useRoutes([
        ...publicRoutes,
        ...privateRoutes,
        {
            element: <ProtectedRoute />,
            children: privateRoutes,
        },
    ]);
}