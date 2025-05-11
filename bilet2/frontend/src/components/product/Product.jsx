import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./product.css";
import { useDispatch } from "react-redux";
import { updateBasket } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router";
const Product = ({ products }) => {
  let { image, name, price } = products;
  let dispatch = useDispatch();
  let navigate=useNavigate()
  return (
    <div key={products._id}>
      <section id="card-area">
        <div className="cards">
          <img src={image} alt="" className="image" />
          <p className="name">{name}</p>
          <p className="rating">
            {" "}
            <span>
              {" "}
              <FaStar className="star" /> 5.0{" "}
            </span>
            <span>
              <FaHeart className="heart" /> 29{" "}
            </span>{" "}
          </p>

          <span className="price">${price}</span>
          <div className="btn-area">
            <button
              className="add-card"
              onClick={() => dispatch(updateBasket(products))}
            >
              Add to card
            </button>
            <button className="detail"
            onClick={()=>navigate(`/detail/${products._id}`)}
            >View</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
