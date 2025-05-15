import React from 'react'
import './main.css'

const Main = () => {
  return (
    <div id='main'>
      <div className="main-area">
        <div className="content">
            <h1 style={{letterSpacing:"10px"}} className='title'>MADEWELL</h1>
            <p>Summer Collection</p>
            <span className='first'>1,499 <span className='second'>$1,999</span></span>
            <div className="btn-area">
                <button className='shop'>Shop Now</button>
                <button className='now'>Shop Now</button>
            </div>
        </div>
        <img className='image' src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png.webp" alt="" />
      </div>
    </div>
  )
}

export default Main
