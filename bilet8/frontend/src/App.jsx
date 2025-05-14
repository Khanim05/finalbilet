import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useRoutes } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Features from './pages/features/Features';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Basket from './pages/basket/Basket';
import Admin from './pages/admin/Admin';
import Deatil from './pages/detail/Deatil';
import NotF from './components/notF/NotF';

function App() {
  const router=useRoutes([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/', element:<Home/>},
        {path:'shop', element:<Shop/>},
        {path:'features', element:<Features/>},
        {path:'contact', element:<Contact/>},
        {path:'about', element:<About/>},
        {path:'basket', element:<Basket/>},
        {path:'admin', element:<Admin/>},
        {path:'detail/:id', element:<Deatil/>},
      ]
    },
    {path:'*', element:<NotF/>},
  ])

  return router
}

export default App
