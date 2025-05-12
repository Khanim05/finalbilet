import React from 'react'
import './basket.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { decrement, increment, remove } from '../../redux/featured/basketSlice';

const Basket = () => {
  let {basket}= useSelector(p=>p.basket)
  const dispatch=useDispatch()
  const total=basket.reduce((acc,sum)=>acc+sum.price*sum.count,0)

  return (
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

              <button className='mnsBtn' 
              disabled={p.count==1}
              onClick={()=>dispatch(decrement(p._id))}>-</button>
            <p>{p.count}</p>
            <button className='plsBtn' onClick={()=>dispatch(increment(p._id))}>+</button>
            </div>
            
          </td>
          <td><Button variant='danger' onClick={()=>dispatch(remove(p._id))}>Remove</Button></td>
        </tr>
        ))
      }
      <p className='total'>Total Price: ${total}</p>
      </tbody>
    </Table>
  )
}

export default Basket
