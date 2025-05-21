import React, { useEffect } from 'react'
import './products.css'
import { getProduct } from '../../redux/features/product'
import Product from '../product/Product'
import { useSelector,useDispatch } from 'react-redux'
const Products = () => {
  const {allProduct}=useSelector(p=>p.product)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  return (
    <div id='product-area'>
      <div className="product">
         {
        allProduct && allProduct.map(p=>(
          <Product
          products={p}
          />
        ))
      }
      </div>
     
    </div>
  )
}

export default Products
