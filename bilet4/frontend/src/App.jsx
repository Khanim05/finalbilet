// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useRoutes } from "react-router";
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Offer from './pages/offer/Offer'
import Menu from './pages/menu/Menu'
import News from './pages/news/News'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Basket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import Admin from './pages/admin/Admin'
import NotFound from './components/notFound/NotFound'
import Detail from "./pages/detail/Detail";


function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "offer",
          element: <Offer />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "basket",
          element: <Basket />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return router;
}

export default App;
