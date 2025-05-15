import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './basket.css'
import { decrement, increment, remove } from '../../redux/features/basket';

const Basket = () => {
  let {basket}=useSelector(p=>p.basket)
  let dispatch=useDispatch()
  let total=basket.reduce((acc,sum)=>(acc+sum.count*sum.price),0)
  return (
    <div id='basket-area'>
      <div className="header">
        <h1>Cart</h1>
      </div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Text</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {
          basket && basket.map((p)=>(
            <tr>
          <td><img src={p.image} alt=""  className='image'/></td>
          <td><h5>{p.title}</h5></td>
          <td className='text'>{p.text}</td>
          <td className='price'>${p.price}</td>
          <td>
            <div className="count-area">
              <button className='mnsBtn' onClick={()=>dispatch(decrement(p))}>-</button>
              <p>{p.count}</p>
              <button onClick={()=>dispatch(increment(p))} className='plsBtn'>+</button>
            </div>
          </td>
          <td><Button variant="primary" onClick={()=>dispatch(remove(p._id))}>x</Button></td>
        </tr>
          ))
        }
      </tbody>
      <Button className='total'><p>Total Price: $ {total.toFixed(0)}</p></Button>
    </Table>
    
    </div>
  )
}

export default Basket
