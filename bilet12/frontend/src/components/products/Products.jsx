import React, { useEffect } from 'react'
import './products.css'
import { getProduct } from '../../redux/featutes/product'
import {useSelector,useDispatch} from 'react-redux'
import Product from '../product/Product'
const Products = () => {
  let {Allproduct}=useSelector(p=>p.product)
  let dispatch=useDispatch()
  useEffect(()=>{
 dispatch(getProduct())
  },[dispatch])
  return (
    <div id='product-area'>
      <div className="product-area">
        <div className="header">
          <h5>About our watches</h5>
          <h1> <span>New</span>,  <span>Improved </span>Design <br />
            and Performance</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, rerum.</p>
        </div>
        <div className="products">
          {
            Allproduct && Allproduct.map(p=>(
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
