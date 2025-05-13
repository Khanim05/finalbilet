import React from 'react'
import {useParams} from 'react-router'
import { useSelector } from 'react-redux'
import './detail.css'

const Detail = () => {
  let {id}=useParams()
  let {product}=useSelector(p=>p.product)
  let findProd=product.find(p=>p._id===id)
  return (
     <div id='detail-area'>
       <div className="cards">
        <img className='image' src={findProd.image} alt="" />
        <div className="content">
         <h5 className='title'>{findProd.title}</h5>
         <p className='price'>${findProd.price}</p>
         <p className='desc'>{findProd.description}</p>
         <button className='addBtn'>Add to card</button>
        </div>
 
       </div>
       
     </div>
   )
}

export default Detail
