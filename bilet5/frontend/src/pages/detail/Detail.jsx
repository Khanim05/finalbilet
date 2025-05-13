import React from 'react'
import './detail.css'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { addBasket } from '../../redux/featured/basketSlice'
const Detail = () => {
  let {id}=useParams()
  let {products}=useSelector(p=>p.product)
  let findProd=products.find(p=>p._id==id)
  return (
    <div id='detail-area'>
        <div className="card">
    
            <img src={findProd.image} alt=""  className='image'/>
            <div className="content">
                <p className='title'>{findProd.title}</p>
                <p className='price'>${findProd.price}</p>
                <p>{findProd.description}</p>
                <button className='addCard' onClick={()=>dispatch(addBasket(findProd))}>Add to card</button>
            </div>
        </div>
      
    </div>
  )
}

export default Detail
