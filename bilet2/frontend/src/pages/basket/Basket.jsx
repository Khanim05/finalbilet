import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./basket.css";
import { decrement, increment, remove } from "../../redux/features/basketSlice";

const Basket = () => {
  let { basketPrduct } = useSelector((p) => p.basket);
  let total = basketPrduct.reduce((acc, sum) => acc + sum.price * sum.count, 0);
  let dispatch = useDispatch();
  return (
    <div id="basket-area">
      <div className="card-area">
        <h2 className="cards">Cart</h2>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basketPrduct &&
            basketPrduct.map((p) => (
              <tr>
                <td>
                  <img src={p.image} alt="" className="image" />
                </td>
                <td className="title">{p.name}</td>
                <td className="price">${p.price}</td>
                <td>
                  <div className="count-area">
                    <button
                      className="mnsBtn"
                      disabled={p.count === 1}
                      onClick={() => dispatch(decrement(p))}
                    >
                      -
                    </button>
                    <p>{p.count}</p>
                    <button
                      className="plsBtn"
                      onClick={() => dispatch(increment(p))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="removeBtn"
                    onClick={() => dispatch(remove(p._id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          <p className="total">Total Price: ${total}</p>
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
