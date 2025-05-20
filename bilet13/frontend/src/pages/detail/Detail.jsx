import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './detail.css'

const Detail = () => {
  const {product}=useSelector(p=>p.basket)
  const {id}=useParams()
  let findProd=product.find(p=>p._id===id)
  return (
    <div id='detail-area'>
      <div className="header">
         <h1>Product Detail</h1>
      </div>
      <div className="cards" onClick={()=>navigate(`detail/${products._id}`)}>
              <img className='image' src={findProd.image} alt="" />
              <div className="content">
                
                <h6 className='title'>{findProd.title}</h6>
                <p className='txt'>Meat, Potatoes, Rice, Tomatoe</p>
                <button className='add' onClick={(e)=>{
                 e.stopPropagation()
                 dispatch(addBasket(findProd))
                }} >Add Basket</button>
               <div className="price">
                  <p>${findProd.price}</p>
                </div>
                </div>
                
              
            </div>
    </div>
  )
}

export default Detail
