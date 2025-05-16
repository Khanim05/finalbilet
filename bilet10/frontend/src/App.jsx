import { useRoutes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Catalog from './pages/catalog/Catalog'
import Arrivals from './pages/arrivals/Arrivals'
import Contact from './pages/contact/Contact'
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
        {path:'about', element:<About/>},
        {path:'shop', element:<Shop/>},
        {path:'catalog', element:<Catalog/>},
        {path:'arrivals', element:<Arrivals/>},
        {path:'contact', element:<Contact/>},
        {path:'basket', element:<Basket/>},
        {path:'admin', element:<Admin/>},
        {path:'detail/:id', element:<Detail/>},
      ]
    },
    {path:'*',element:NotF}
  ])

  return router
}


export default App
