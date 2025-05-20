import React from 'react'
import './basket.css'
import {useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { decrement, incremenet, remove } from '../../redux/features/basket';
import 'bootstrap/dist/css/bootstrap.min.css';
const Basket = () => {
  let {basket}=useSelector(p=>p.basket)
  let dispatch=useDispatch()
  const total=basket.reduce((acc,sum)=>acc+sum.count*sum.price,0)
  return (
    <div id='basket-area'>
       <div className="header">
         <h1>Basket Page</h1>
      </div>
        <Table striped bordered hover responsive>
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
          <td><img src={p.image} alt=""  className='image'/></td>
          <td><h5>{p.title}</h5></td>
          <td>${p.price}</td>
          <td><div className="count-area">
            <button onClick={()=>dispatch(decrement(p._id))}>-</button>
            <p>{p.count}</p>
            <button onClick={()=>dispatch(incremenet(p._id))}>+</button>
            </div>
            </td>
            <td> <Button variant="primary" onClick={()=>dispatch(remove(p._id))}>Remove</Button></td>
        </tr>
        ))
      }

      </tbody>
      <Button className='mt-3'>Total Price: ${total}</Button>
    </Table>
    </div>
  )
}

export default Basket
