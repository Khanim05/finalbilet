import './App.css'
import { useRoutes } from 'react-router'
import Layout from './components/layout/Layout'
import Products from './pages/products/Products'
import About from './pages/about/About'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import Special from './pages/special/Special'
import Testi from './pages/testi/Testi'
import Wishlist from './pages/wishlist/Wishlits'
import NotF from './components/notF/NotF'

function App() {
const router=useRoutes([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
       path:'/',element:<Home/>
      },
       {
       path:'products',element:<Products/>
      },
       {
       path:'about',element:<About/>
      },
       {
       path:'special',element:<Special/>
      },
       {
       path:'testi',element:<Testi/>
      },
       {
       path:'blog',element:<Blog/>
      },
       {
       path:'contact',element:<Contact/>
      },
       {
       path:'wishlist',element:<Wishlist/>
      },
       {
       path:'basket',element:<Basket/>
      },
       {
       path:'/detail/:id',element:<Detail/>
      },
       {
       path:'admin',element:<Admin/>
      }

    ]
  },
  {
    path:'*', element:<NotF/>
  }
])

return router
}

export default App
