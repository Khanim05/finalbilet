import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div id="main-area">
      <div className="main">
        <div className="sidebar">
          <div className="content-main">
            <p className="txt">New Arrivals</p>
            <h1>Zip Hoodie</h1>
            <p className="text">
              Posuere sociis eu libero vivamus convallis eros pede torquent
              vestibulum aenean.{" "}
            </p>
            <a href="#">Discover now</a>
          </div>
        </div>
        <div className="image-area">
            <div className="img-content">
                <img
            src="http://ecolife.posthemes.com/demo11/fashion9/img/cms/fs9_1.jpg"  alt=""
          />
          <div className="text-area">
              <h3>Sale Clothing</h3>
              <p>Great Discount</p>
          </div>
            </div>

           

            <div className="div-area">
                 <div className="div">
                <img src="http://ecolife.posthemes.com/demo11/fashion9/img/cms/fs9_3.jpg" alt="" />
                <div className="div-content">
                    <h5>Bag.No1</h5>
                    <p>Big sale</p>
                </div>
            </div>

             <div className="div">
                <img src="http://ecolife.posthemes.com/demo11/fashion9/img/cms/fs9_2.jpg" alt="" />
                <div className="div-content">
                    <h5>Clothing.No18</h5>
                    <p>Sale off 20%</p>
                </div>

                
            </div>
            </div>
            
            
            
          
        </div>
      </div>
    </div>
  );
};

export default Main;
