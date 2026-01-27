import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./utilty.css";
import { ErrorPage } from "./ErrorPage";
import Layout from "./layout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import { Transaction } from "./pages/Transaction";
import { Users } from "./pages/Users";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
      {
        path: "/master/admin/dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/master/admin/dashboard/assets",
            element: <Assets />,
          },
          {
            path: "/master/admin/dashboard/users",
            element: <Users />,
          },
          {
            path: "/master/admin/dashboard/transaction",
            element: <Transaction />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
