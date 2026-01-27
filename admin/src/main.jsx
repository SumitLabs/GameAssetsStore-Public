import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import Auth from "./pages/Auth";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Assets from "./pages/Assets";
import Profile from "./pages/Profile"
import "./index.css";
import "./utilty.css";

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
        path: "/dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/dashboard/upload",
            element: <Upload />,
          },
           {
            path: "/dashboard/assets",
            element: <Assets />,
          },
          {
            path:"/dashboard/profile",
            element:<Profile/>
          }
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
