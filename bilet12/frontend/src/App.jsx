
import { useRoutes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import Features from './pages/features/Features'
import Review from './pages/review/Review'
import Shop from './pages/shop/Shop'
import Basket from './pages/basket/Basket'
import Admin from './pages/admin/Admin'
import Detail from './pages/detail/Detail'
import NotF from './components/notF/NotF'
function App() {
  const router=useRoutes([
    {
      path:'/',
      element:<Layout/>,
      children:[
          {path:'/', element:<Home/>},
          {path:'gallery', element:<Gallery/>},
          {path:'features', element:<Features/>},
          {path:'review', element:<Review/>},
          {path:'shop', element:<Shop/>},
          {path:'basket', element:<Basket/>},
          {path:'admin', element:<Admin/>},
          {path:'detail/:id', element:<Detail/>},
      ]
    },
    {path:'*', element:<NotF/>},
  ])
  return router
}

export default App
