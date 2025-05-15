import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useRoutes } from 'react-router';
import Layout from './components/layout/Layout';
import Collection from './pages/collection/Collection';
import Shop from './pages/shop/Shop';
import Catalog from './pages/catalog/Catalog';
import Contact from './pages/contact/Contact';
import Basket from './pages/basket/Basket';
import Admin from './pages/admin/Admin';
import Detail from './pages/detail/Detail';
import NotF from './components/notF/NotF';

function App() {
  const router=useRoutes([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/',element:<Collection/>},
        {path:'shop',element:<Shop/>},
        {path:'catalog',element:<Catalog/>},
        {path:'contact',element:<Contact/>},
        {path:'basket',element:<Basket/>},
        {path:'admin',element:<Admin/>},
        {path:'detail/:id',element:<Detail/>},
      ]
    },
    {path:'*', element:<NotF/>}
  ])
 return router
}

export default App
