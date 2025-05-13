import React from "react";
import "./best.css";

const Best = () => {
  return (
    <div id="best-area">
      <div className="bests">
        <div className="header">
          <h1>
            Best Sellers <span>Shop</span>
          </h1>
          <p>Next | Previous</p>
        </div>

        <div className="best-card">
          <div className="cards">
            <img className="image" src="https://preview.colorlib.com/theme/aranoz/img/product/product_2.png" alt="" />
            <div className="content">
              <h5 className="title">Quartz Belt Watch</h5>
              <p className="price">$150.00</p>
            </div>
          </div>
          <div className="cards">
            <img className="image" src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
            <div className="content">
              <h5 className="title">Quartz Belt Watch</h5>
              <p className="price">$150.00</p>
            </div>
          </div>
          <div className="cards">
            <img className="image" src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="" />
            <div className="content">
              <h5 className="title">Quartz Belt Watch</h5>
              <p className="price">$150.00</p>
            </div>
          </div>
          <div className="cards">
            <img className="image" src="https://preview.colorlib.com/theme/aranoz/img/product/product_5.png" alt="" />
            <div className="content">
              <h5 className="title">Quartz Belt Watch</h5>
              <p className="price">$150.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
