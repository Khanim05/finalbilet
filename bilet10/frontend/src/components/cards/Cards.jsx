import React from 'react'
import './cards.css'

const Cards = () => {
  return (
    <div id='card-area'>
      <div className="card-area">
        <div className="cards">
            <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
            <div className="content">
             <h5>Collections</h5>
             <p>Women</p>
            </div>
        </div>
        <div className="cards">
            <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
            <div className="content">
             <h5>Collections</h5>
             <p>Children</p>
            </div>
        </div>

        <div className="cards">
            <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
            <div className="content">
             <h5>Collections</h5>
             <p>Men</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Cards
