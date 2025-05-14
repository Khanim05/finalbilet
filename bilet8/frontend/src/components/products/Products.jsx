import React, { useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, sortBy } from "../../redux/featured/product";
import Product from "../product/Product";

const Products = () => {
    const {product}=useSelector(p=>p.product)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])

  return (
    <div id="product-area">
      <div className="products">
        <div className="headerP">
          <h1>Our Products</h1>
          <p>
            Consequat magna massa vel suspendisse morbi aliquam faucibus ligula
            ante ipsum ac nulla.
          </p>
          <div className="links">
            <a href="">Clothing</a>
            <a href="">Socks</a>
            <a href="">Sneaker</a>
            <a href="">Hooded Jacket</a>
          </div>
        </div>

        <div className="filterArea">
            <button onClick={()=>dispatch(sortBy("high"))}>Low to high</button>
            <button onClick={()=>dispatch(sortBy("low"))}>High to low</button>
        </div>

        <div className="product">
            {
                product && product.map(p=>(
                    <Product
                    products={p}
                    
                    />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Products;
