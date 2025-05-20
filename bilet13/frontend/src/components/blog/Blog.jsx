import React from 'react'
import './blog.css'
import { MdOutlineMessage } from "react-icons/md";
<MdOutlineMessage />
const Blog = () => {
    return (
        <div id='blog-area'>
            <div className="guests">
                <div className="header">
                    <p>BLOG</p>
                    <h2>Recent Blog</h2>
                </div>

                <div className="guest">
                    <div className="card1">
                        <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
                        <div className="content">
                             <p className='text'>7 July,2018 Admin</p>
                        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, perspiciatis!</h5>
                        <p className="from">
                           Read More <span><MdOutlineMessage /> 3</span>
                        </p>
                        </div>
                       
                    </div>

                    <div className="card1">
                        <img src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg.webp" alt="" />
                        <div className="content">
                             <p className='text'>7 July,2018 Admin</p>
                        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, perspiciatis!</h5>
                        <p className="from">
                           Read More <span><MdOutlineMessage /> 3</span>
                        </p>
                        </div>
                       
                    </div>

                    <div className="card1">
                        <img src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp" alt="" />
                        <div className="content">
                             <p className='text'>7 July,2018 Admin</p>
                        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, perspiciatis!</h5>
                        <p className="from">
                           Read More <span><MdOutlineMessage /> 3</span>
                        </p>
                        </div>
                       
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Blog
