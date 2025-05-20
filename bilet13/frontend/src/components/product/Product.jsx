import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/features/basket'
import { useNavigate } from 'react-router'
const Product = ({products}) => {
  const {image,title,price}=products
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='card-area'>
      <div className="cards" onClick={()=>navigate(`detail/${products._id}`)}>
        <img className='image' src={image} alt="" />
        <div className="content">
          <div className="text">
          <h6 className='title'>{title}</h6>
          <p className='txt'>Meat, Potatoes, Rice, Tomatoe</p>
          <button className='add' onClick={(e)=>{
           e.stopPropagation()
           dispatch(addBasket(products))
          }} >Add Basket</button>
          </div>
          <div className="price">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
