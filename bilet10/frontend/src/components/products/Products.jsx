import  { useEffect } from 'react'
import './products.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, sort } from '../../redux/features/product'
import Product from '../product/Product'

const Products = () => {
  let products=useSelector((state)=>state.product.products)
  
  let dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  console.log(products)
  return (
    <div id='product-area'>
      <div className="product">
        <div className="header">
          <h2>Featured Products</h2>
        </div>
        <div className="filter">
          <button onClick={()=>dispatch(sort("high"))}>Low to High</button>
          <button onClick={()=>dispatch(sort("low"))}>High to Low</button>
        </div>
        <div className="products">
          {
           products && products.map((p)=>(
             <Product
            product={p}
            />
           )
           
           )
          }
        </div>
      </div>
    </div>
  )
}

export default Products
