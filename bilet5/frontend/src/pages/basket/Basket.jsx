import React from 'react'
import './basket.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, remove } from '../../redux/featured/basketSlice';

const Basket = () => {
  const {basket}=useSelector(p=>p.basket)
  const dispatch=useDispatch()
  let total=basket.reduce((acc,sum)=>acc+sum.count*sum.price,0)
  return (
    <div>
      <div className="headerCart">
        <p>Cart</p>
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
          basket && basket.map((p)=>(
            <tr>
          <td><img src={p.image} alt="" className='image' /></td>
          <td className='title'>{p.title}</td>
          <td className='price'>${p.price}</td>
          <td>
            <div className="count-area">
            <button className='mnsBtn' disabled={p.count==1} onClick={()=>dispatch(decrement(p._id))}>-</button>
            <p>{p.count}</p>
            <button className='plsBtn' onClick={()=>dispatch(increment(p._id))}>+</button>
            </div>
           
            </td>
          <td>
            <Button variant='danger' className='removeBtn' onClick={()=>dispatch(remove(p._id))}>Remove</Button>
          </td>
        </tr>
          ))
        }

      </tbody>
      <p className='total'>Total Price: ${total}</p>
    </Table>
    </div>
  )
}

export default Basket
