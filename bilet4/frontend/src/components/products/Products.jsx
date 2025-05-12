import React, { useEffect } from 'react'
import Product from '../product/Product'
import {useSelector,useDispatch} from "react-redux"
import { getProduct } from '../../redux/features/productSlice'
import './products.css'

const Products = () => {
  let {products}=useSelector(p=>p.product)
  let dispatch=useDispatch()

  useEffect(()=>{
    dispatch((getProduct()))
  },[dispatch])

  return (
    <div>
      <section id='product-area'>
        <div className="content">
          <p className='txt'>Our offers</p>
          <h2>Our Offer This Summer</h2>
          <p className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        
  
        </div>

        <div className="products">
          {
            products && products.map((p)=>(
              <Product
              products={p}
              />
            ))
          }
        </div>
        

        <div className="content margin">
          <h2>News</h2>
          <p className='text'>Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.</p>
        </div>
         <div className="cards">
                   <div className='card'>
        <img className='image' src='https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg' alt="" />
        <div className="content">
        <p className='title'>We Have Dilecious Food</p>
        <p className='description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <button className='addCard'>Read More</button>
        </div>
      </div>

        <div className='card'>
        <img className='image' src='https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg' alt="" />
        <div className="content">
        <p className='title'>We Have Dilecious Food</p>
        <p className='description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <button className='addCard'>Read More</button>
        </div>
      </div>

        <div className='card'>
        <img className='image' src='https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg' alt="" />
        <div className="content">
        <p className='title'>We Have Dilecious Food</p>
        <p className='description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <button className='addCard'>Read More</button>
        </div>
      </div>
         </div>


      </section>
    </div>
  )
}

export default Products
