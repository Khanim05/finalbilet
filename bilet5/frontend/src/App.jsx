import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useRoutes } from 'react-router'
import Shop from './pages/shop/Shop'
import Page from './pages/page/Page'
import Home from './pages/hom/Home'
import Prom from './pages/prom/Prom'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Basket from './pages/basket/Basket'
import Admin from './pages/admin/Admin'
import Layout from './components/layout/Layout'
import Detail from './pages/detail/Detail';



function App() {
  
const router=useRoutes([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'/', element:<Home/>},
      {path:'shop', element:<Shop/>},
      {path:'prom', element:<Prom/>},
      {path:'pages', element:<Page/>},
      {path:'blog', element:<Blog/>},
      {path:'contact', element:<Contact/>},
      {path:'basket', element:<Basket/>},
      {path:'admin', element:<Admin/>},
      {path:'detail/:id', element:<Detail/>}
    ]
  }
])
return router
}


export default App
