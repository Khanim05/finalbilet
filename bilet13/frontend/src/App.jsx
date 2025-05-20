import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router'
import './App.css'
import Layout from './components/layouyt/Layout'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Special from './pages/sepical/Special'
import Reserv from './pages/reserv/Reserv'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Basket from './pages/basket/Basket'
import Admin from './pages/admin/Admin'
import Detail from './pages/detail/Detail'
import Notf from './components/notF/Notf'

function App() {
  const router=useRoutes([
    {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'menu',element:<Menu/>},
      {path:'sepical',element:<Special/>},
      {path:'reserv',element:<Reserv/>},
      {path:'blog',element:<Blog/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'basket',element:<Basket/>},
      {path:'admin',element:<Admin/>},
      {path:'detail/:id',element:<Detail/>},
        
    ]
    },
    {path:'*',element:<Notf/>},
  ])
  return router
}

export default App
