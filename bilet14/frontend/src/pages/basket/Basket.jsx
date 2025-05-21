import React from 'react'
import './basket.css'
import Table from 'react-bootstrap/Table';
import {useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import { decrement, increment, removeBasket } from '../../redux/features/basket';
const Basket = () => {
  let {basket}=useSelector(p=>p.basket)
  let dispatch=useDispatch()
  let total=basket.reduce((acc,sum)=>acc+sum.count*sum.price,0)
  return (
    <div id='basket-area'>
      <div className="container">
       <div className="header">
        <p>Basket Page</p>
      </div>
       <Table striped bordered hover variant="dark">
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
        basket && basket.map(p=>(
            <tr>
          <td><img className='image' src={p.image} alt="" /></td>
          <td><h5>{p.title}</h5></td>
          <td><p>${p.price}</p></td>
          <td>
            <div className="count-area">
              <button onClick={()=>dispatch(decrement(p._id))}>-</button>
              <p>{p.count}</p>
              <button onClick={()=>dispatch(increment(p._id))}>+</button>
            </div>
          </td>
          <td><Button variant="danger" style={{backgroundColor:"red"}} onClick={()=>dispatch(removeBasket(p._id))}>Remove</Button></td>
        </tr>
        ))
      }
      </tbody>
    </Table>
    <Button variant='dark'>Total Price: ${total}</Button>
      </div>
     
    </div>
  )
}

export default Basket
