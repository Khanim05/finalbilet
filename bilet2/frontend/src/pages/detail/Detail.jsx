
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './detail.css'

const Detail = () => {
  let { id } = useParams();
  let { allProducts } = useSelector((p) => p.product);
  let findProd = allProducts.find((p) => p._id === id);
  return (
    <div>
      <section id="detail-area">
        <div className="card-area">
        <h2 className="cards">Detail Page</h2>
      </div>
        <div className="detail">
          <img src={findProd.image} className="image" alt="" />
          <div className="content">
            <p className="name">{findProd.name}</p>
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

            <span className="price">${findProd.price}</span>
            <div className="btn-area">
              <button className="add-card">Add to card</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
