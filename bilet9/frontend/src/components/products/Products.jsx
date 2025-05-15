import React, { useEffect } from 'react'
import './products.css'
import {useDispatch, useSelector} from 'react-redux'
import { getProduct, search, sortBy } from '../../redux/features/product'
import Product from '../product/Product'
const Products = () => {
  let {products}=useSelector(p=>p.product)
  let dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  return (
    <div id='product-area'>
      <div className="product">
        <div className="filter">
          <button onClick={()=>dispatch(sortBy("high"))}>Low to High</button>
          <input type="text"  placeholder='Search product..' onChange={(e)=>dispatch(search(e.target.value))}/>
          <button onClick={()=>dispatch(sortBy("low"))}>High to Low</button>
        </div>
        

        <div className="products">
          {
            products && products.map((p)=>(
              <Product
              products={p}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Products
