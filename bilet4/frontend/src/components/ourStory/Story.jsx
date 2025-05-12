import React from 'react'
import './story.css'

const Story = () => {
  return (
   <section id='story-area'>
    <div className="area">
     <div className="content">
        <p className='header1'>Our Story</p>
        <h2>Welcome</h2>

        <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptatem itaque officiis odio veritatis! Nemo corporis ipsa eveniet ad id.</p>
        <p className='txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam dolores adipisci tenetur nemo quo commodi repellat ut, eveniet et pariatur, rem nihil corporis nulla qui? Saepe rem sequi beatae neque mollitia in repudiandae dignissimos.</p>
        <button>Learn More About us</button>
     </div>
     <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" className='image'/>
    </div>
   </section>
  )
}

export default Story
