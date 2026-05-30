import { lazy, Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import("./layout"));
const Loading = lazy(() => import("./loader"));
const { ErrorPage } = lazy(() => import("./ErrorPage"));
const Contact = lazy(() => import("./pages/contact"));
const Home = lazy(() => import("./pages/Home"));
const Gui = lazy(() => import("./pages/Gui"));
const Music = lazy(() => import("./pages/Music"));
const Sound = lazy(() => import("./pages/Sound"));
const ThreeD = lazy(() => import("./pages/ThreeD"));
const TwoD = lazy(() => import("./pages/TwoD"));
const About = lazy(() => import("./pages/About"));
const News = lazy(() => import("./pages/News"));
const Product = lazy(() => import("./pages/Product"));
const Blog = lazy(() => import("./pages/Blog"));
const Article = lazy(() => import("./pages/Article"));
const Games = lazy(()=>import("./pages/Games"))
import "./index.css";
import "./utilty.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path:"/games",
        element:<Games/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
);
