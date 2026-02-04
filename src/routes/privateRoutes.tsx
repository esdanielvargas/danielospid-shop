import { AccountLayout } from "../layouts";

export const privateRoutes = [
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      { path: "", element: <div>Account Home</div> },
      { path: "dashboard", element: <div>Dashboard</div> },
      { path: "profile", element: <div>Profile</div> },
    ]
  },
];