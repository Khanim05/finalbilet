import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/features/basket";
import {useNavigate} from 'react-router'

const Product = ({ products }) => {
  let { image, title, price } = products;
  let navigate=useNavigate()
  const dispatch = useDispatch();
  return (
    <div id="card-area">
      <div className="cards" onClick={()=>navigate(`detail/${products._id}`)}>
        <img className="image" src={image} alt="" />
        <div className="content">
          <h5 className="title">{title}</h5>
          <p className="price">${price}</p>
          <button
            className="addBtn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addBasket(products));
            }}
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
