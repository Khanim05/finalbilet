import { useRoutes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Baket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import Page from './pages/page/Pages'
import Shop from './pages/shop/Shop'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Detail from './pages/detail/Detail'
import  NotF from './components/notF/Notf'



function App() {
  const routes=useRoutes([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',element:<Home/>,
        },
        {
          path:'shop',element:<Shop/>,
        },
        
        {
          path:'blog',element:<Blog/>,
        },
        
        {
          path:'about',element:<About/>,
        },
        
        {
          path:'pages',element:<Page/>,
        },
        
        {
          path:'contact',element:<Contact/>,
        },
        
        {
          path:'basket',element:<Baket/>,
        },
        
        {
          path:'wishlist',element:<Wishlist/>,
        },
        
        {
          path:'/detail/:id',element:<Detail/>,
        },
        
        
        
      ]
    },
    {
      path:'*',element:<NotF/>,
    },
  ])


  return routes


  
}

export default App
