import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router'
import { addBasket } from '../../redux/features/basket'
import './detail.css'

const Detail = () => {
  let {id}=useParams()
  let {products}=useSelector(p=>p.product)
  let findProd=products.find(p=>p._id==id)
  return (
    
    <div id='card-area'>
       <div className="basket-header">
        <h5><span style={{fontSize:"14px"}}>Home/</span>Detail Page</h5>
      </div>
      <div className="detailCard">
         <img src={findProd.image} alt="" className='image' />
                  <div className="content1">
                    <h5 className='title'>{findProd.title}</h5>
                    <p className='text'>{findProd.text}</p>
                    <p className='price'>${findProd.price}</p>
                    <button className='addCart' onClick={(e)=>{
                      e.stopPropagation()
                      dispatch(addBasket(findProd))}}>Add to cart</button>
                   </div>
      </div>
      
    </div>
  )
}

export default Detail
