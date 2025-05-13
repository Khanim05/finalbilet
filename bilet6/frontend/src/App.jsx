import "./App.css";
import Layout from "./components/layout/Layout";
import { useRoutes } from "react-router";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Basket from "./pages/basket/Basket";
import Admin from "./pages/admin/Admin";
import Detail from "./pages/detail/Detail";
import Page from "./pages/page/Page";
import NotF from "./components/notF/NotF";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "pages", element: <Page /> },
        { path: "blog", element: <Blog /> },
        { path: "contact", element: <Contact /> },
        { path: "basket", element: <Basket /> },
        { path: "admin", element: <Admin /> },
        { path: "detail/:id", element: <Detail /> },
      ],
    },
    {
      path: "*",
      element: <NotF />,
    },
  ]);

  return router;
}

export default App;
