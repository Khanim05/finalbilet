import React from 'react'
import './card.css'
const Cards = () => {
  return (
    <div id='cards-area'>
        <div className="headerCollect">
            <h1>Collections</h1>
        </div>
        <div className="cards-area">
            <div className="cards">
              <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" className='image' alt="" />
              <div className="content">
                <h5 className='title'>Marc Jacobs bag</h5>
                <p className='text'>Summer Collection</p>
                <h5 className='price'>$9.50</h5>
              </div>
            </div>

            <div className="cards">
              <img src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" className='image' alt="" />
              <div className="content">
                <h5 className='title'>The Belt</h5>
                <p className='text'>Summer Collection</p>
                <h5 className='price'>$9.50</h5>
              </div>
            </div>


            <div className="cards">
              <img className='image' src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />
              <div className="content">
                <h5 className='title'>Shoe</h5>
                <p className='text'>Summer Collection</p>
                <h5 className='price'>$9.50</h5>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default Cards
