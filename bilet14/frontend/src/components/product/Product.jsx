import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router'
import { addBasket } from '../../redux/features/basket'
const Product = ({products}) => {
  const {image,title,price}=products
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div id='card-area'>
      <div className="cards" onClick={()=>navigate(`detail/${products._id}`)}>
        <img src={image} alt="" className='image' />
        <div className="content">
          <h5>{title}</h5>
          <p className='text'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
          <p className="price">${price}</p>
          <p className='learn'>Learn More</p>
          <button className='add' onClick={(e)=>{
            e.stopPropagation();
            dispatch(addBasket(products))

          }}>Add Basket</button>
        </div>
      </div>
    </div>
  )
}

export default Product
