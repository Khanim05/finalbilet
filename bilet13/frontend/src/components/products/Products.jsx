import React, { useEffect } from 'react'
import './products.css'
import { FaCloudMeatball } from "react-icons/fa6";
import { GiCutLemon } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import {useDispatch, useSelector} from 'react-redux'
import { getProduct, searchBy, sortBy } from '../../redux/features/product';
import Product from '../product/Product';

const Products = () => {
  const {product}=useSelector(p=>p.product)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  return (
    <div id='product-area'>
        <div className="product-area">
          <div className="header">
        <p>Our menu</p>
        <h5>Discover Our Exclusive Menu</h5>
        <div className="btn-area">
            <button className='mainBtn'> <FaCloudMeatball /> Main</button>
            <button><GiCutLemon /> Dessert</button>
            <button> <RiDrinks2Fill /> Drinks</button>
        </div>
        </div>  
        <div className="filter">
            <button onClick={()=>dispatch(sortBy("high"))}>Low to high</button>
            <input type="text" placeholder='Search product..' onChange={(e)=>dispatch(searchBy(e.target.value))} />
            <button onClick={()=>dispatch(sortBy("low"))}>High to low</button>
        </div>
        <div className="products">
       {
        product && product.map(p=>
          <Product
          products={p}
          />
        )
       }
      </div>
        </div>
      
    </div>
  )
}

export default Products
