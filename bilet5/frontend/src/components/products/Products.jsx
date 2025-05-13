import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/featured/productSlice'
import Product from '../product/Product'
import './products.css'

const Products = () => {
    const { products } = useSelector(p => p.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div id='product-area'>
            <div className="content">
                <h2>New Arrivals</h2>
                <div className="btn-area">
                    <button>All</button>
                    
                    <button>Women's</button>
                        <button>Accessories</button>

                        <button>Men's</button>
                </div>
            </div>

            <div className="products">
             {
                products && products.map((p)=>(
                    <Product
                    product={p}
                    />
                ))
             }
            </div>
        </div>
    )
}

export default Products
