import { useEffect } from "react";
import { getAllProducts, sortBy, sortSearch } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import "./productsC.css";

const ProductsC = () => {
  let { allProducts } = useSelector((p) => p.product);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <section id="product-area">
      <div className="content">
        <p className="name">Popular Products</p>
        <h2 className="title">Our Products</h2>
        <p className="txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          aspernatur.
        </p>
      </div>{" "}
      <div className="filter-area">
        <button onClick={()=>dispatch(sortBy("low"))}>High to low</button>
        <input type="text"  placeholder="Search product..."
        onChange={(e)=>{
          dispatch(sortSearch(e.target.value))
        }}
        />
        <button onClick={()=>dispatch(sortBy("high"))}>Low to high</button>
      </div>
      <div className="products_area">
        {allProducts && allProducts.map((p) => <Product products={p} />)}
      </div>
    </section>
  );
};

export default ProductsC;
