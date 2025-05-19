import React from 'react'
import './product.css'
import {useDispatch} from 'react-redux'
import { addBasket } from '../../redux/featutes/basket'
const Product = ({products}) => {
  let {image,title,price}=products
  let dispatch=useDispatch()
  return (
    <div id='card-area'>
      <div className="cards">
        <img src={image} alt="" className="image" />
        <div className="content">
          <h5 className="title">{title}</h5>
          <p className="price">${price}</p>
          <button onClick={(e)=>{
            e.stopPropagation();
            dispatch(addBasket(products))
          }}>Add to card</button>
        </div>
      </div>
    </div>
  )
}

export default Product
