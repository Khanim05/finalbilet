import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import './basket.css'
import { decrement, increment, remove } from '../../redux/featutes/basket';
const Basket = () => {
  let { basket } = useSelector(p => p.basket)
  const total = basket.reduce((acc, sum) => acc + sum.count * sum.price, 0)
  const dispatch = useDispatch()
  return (
    <div id='basket-area'>
      <div className="header">
        <h4><span>Home/</span>Cart</h4>
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
          {
            basket && basket.map(p => (
              <tr>
                <td><img src={p.image} alt="" className='image' /></td>
                <td><h5 className="title">{p.title}</h5></td>
                <td>${p.price}</td>
                <td><div className="count-area">
                  <button onClick={()=>dispatch(decrement(p._id))}>-</button>
                  <p className="count">{p.count}</p>
              
                 <button onClick={()=>dispatch(increment(p._id))}>+</button>
                </div></td>
                <td><Button className='remove' onClick={()=>dispatch(remove(p._id))}>x</Button></td>
              </tr>
            ))
          }

        </tbody>
        <Button className='mt-3'>Total price: ${total}</Button>
      </Table>
    </div>
  )
}

export default Basket
