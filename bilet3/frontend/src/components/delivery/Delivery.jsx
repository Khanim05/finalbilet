import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
<MdOutlineLocalShipping />
import { MdOutlinePayment } from "react-icons/md";
<MdOutlinePayment />
import { MdOutlineMedicalServices } from "react-icons/md";
<MdOutlineMedicalServices />
import './delivery.css'
const Delivery = () => {
  return (
    <div>
      <section id='deliveri-area'>
        <div className="area">
            <div className="ship">
            <MdOutlineLocalShipping  className='icon'/>
            <div className="content">
                <h5>Free shipping</h5>
                <p>
                Capped at $319 per order
                </p>
            </div>
            </div>
            <div className="ship">
            <MdOutlinePayment className='icon'/>
            <div className="content">
                <h5>Free shipping</h5>
                <p>
                Capped at $319 per order
                </p>
            </div>
            </div>
            <div className="ship">
            <MdOutlineMedicalServices className='icon'/>
            <div className="content">
                <h5>Free shipping</h5>
                <p>
                Capped at $319 per order
                </p>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Delivery
