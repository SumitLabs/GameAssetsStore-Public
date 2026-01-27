import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { ErrorPage } from "./ErrorPage";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Gui from "./pages/Gui";
import Music from "./pages/Music";
import Sound from "./pages/Sound";
import ThreeD from "./pages/ThreeD";
import TwoD from "./pages/TwoD";
import About from "./pages/About"
import Product from "./pages/Product";
import "./index.css";
import "./utilty.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gui",
        element: <Gui />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/sound",
        element: <Sound />,
      },
      {
        path: "/threed",
        element: <ThreeD />,
      },
      {
        path: "/twod",
        element: <TwoD />,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
