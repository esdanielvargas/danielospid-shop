import { MainLayout } from "../layouts";
import { Home } from "../pages";

export const publicRoutes = [
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/search", element: <Home /> },
            { path: "/categories", element: <Home /> },
            { path: "/collections", element: <Home /> },
            { path: "/collections/:collection", element: <Home /> },
            { path: "/products", element: <Home /> },
            { path: "/products/:product", element: <Home /> },
            { path: "/contact", element: <Home /> },
            { path: "/cart", element: <Home /> },
        ],
    },
];