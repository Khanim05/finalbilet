import React from 'react'
import './guest.css'
import { FaStar } from "react-icons/fa";
<FaStar />
const Guest = () => {
  return (
    <div id='guest-area'>
      <div className="guests">
         <div className="header">
             <p>GUESTS SAYS</p>
             <h2>Our Satisfied Guests says</h2>
             </div>
       <div className="guest">
        <div className="card1">
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <div className="icon-area">
           <FaStar  className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
          </div>
          <p className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <h5>Dennis Green</h5>
          <p className="from">
            Guests from Italy
          </p>
        </div>

        <div className="card1">
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <div className="icon-area">
           <FaStar  className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
          </div>
          <p className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <h5>Dennis Green</h5>
          <p className="from">
            Guests from Italy
          </p>
        </div>

        <div className="card1">
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <div className="icon-area">
           <FaStar  className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
           <FaStar className='star' />
          </div>
          <p className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <h5>Dennis Green</h5>
          <p className="from">
            Guests from Italy
          </p>
        </div>
       </div>
      </div>
  
    </div>
  )
}

export default Guest
