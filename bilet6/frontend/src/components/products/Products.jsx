import React, { useEffect } from "react";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, searchProduct, sortBy } from "../../redux/features/product";
import Product from "../product/Product";

const Products = () => {
  const { product } = useSelector((p) => p.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div id="product-area">
      <div className="products">
        <div className="header">
          <h1>Awesome <span>Shop</span></h1>
          <p>Next | Previous</p>
        </div>

        <div className="filter">
          <button onClick={()=>dispatch(sortBy("high"))}>Low to high</button>
          <input type="text" placeholder="Search product.." onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
          <button onClick={()=>dispatch(sortBy("low"))}>Hight to low</button>
        </div>

        <div className="product">
          {product && product.map((p) => <Product products={p} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
