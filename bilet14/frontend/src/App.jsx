import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useRoutes } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Reserv from './pages/reserv/Reserv';
import Gallery from './pages/gallery/Gallery';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Basket from './pages/basket/Basket';
import Admin from './pages/admin/Admin';
import Detail from './pages/detail/Detail';
import Wishlist from './pages/wishlist/Wishlist';
import NotF from './components/notF/NotF';

function App() {
 const router=useRoutes([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {path:'/', element:<Home/>},
    {path:'menu', element:<Menu/>},
    {path:'reserv', element:<Reserv/>},
    {path:'gallery', element:<Gallery/>},
    {path:'about', element:<About/>},
    {path:'blog', element:<Blog/>},
    {path:'contact', element:<Contact/>},
    {path:'basket', element:<Basket/>},
    {path:'admin', element:<Admin/>},
    {path:'detail/:id', element:<Detail/>},
    {path:'wishlist', element:<Wishlist/>},
  ]
 },
 {path:'*', element:<NotF/>},
])
return router
}

export default App
