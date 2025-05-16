import React from 'react'
import { MdLocalShipping } from "react-icons/md";

import { IoMdRefresh } from "react-icons/io";

import { BiSolidHelpCircle } from "react-icons/bi";

import './ship.css'
const Ship = () => {
    return (
        <div id='ship-area'>
            <div className="ships">
                <div className="ship">
                    <MdLocalShipping className='icon' />
                    <div className="content">
                        <p className='free'>Free shipping</p>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>

                <div className="ship">
                    <IoMdRefresh className='icon' />
                    <div className="content">
                        <p className='free'>Free shipping</p>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>

                <div className="ship">
                    <BiSolidHelpCircle className='icon' />
                    <div className="content">
                        <p className='free'>Free shipping</p>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ship
