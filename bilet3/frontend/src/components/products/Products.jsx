import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, searchProd, sortby } from '../../redux/featured/ProSlice'
import Prouct from '../product/Prouct'
import './products.css'

const Products = () => {
    const {allProduct}=useSelector(p=>p.product)
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(getAllProduct())
    },[dispatch])
    return (
        <div>
            <section id='product-area'>
                <div className="header">
                    <h2>OUR PRODUCT</h2>
                    <div className="btn-area">
                        <button className='btns'>Featured</button>
                        <button className='btns'>BestSeller</button>
                        <button className='btns'>Latest</button>
                    </div>
                </div>

                <div className="sort-area">
                    <button className='sortby' onClick={()=>dispatch(sortby("high"))}>Low to high</button>
                    <input type="text"  placeholder='Search product...' onChange={(e)=>dispatch(searchProd(e.target.value))}/>
                    <button className='sortby' onClick={()=>dispatch(sortby("low"))}>High to low</button>
                </div>

                <div className="product">
                    {
                        allProduct && allProduct.map(p=>(
                            <Prouct
                            product={p}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Products
