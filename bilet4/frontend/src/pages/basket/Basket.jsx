import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './basket.css'
import { decrement, increment, removeBasket } from '../../redux/features/basketSlice';

const Basket = () => {
  let {basket}=useSelector(p=>p.basket)
  const total=basket.reduce((acc,sum)=>acc+sum.count*sum.price,0)
  let dispatch=useDispatch()
  return (
    <div>
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
          <td><img src={p.image} className='image' alt="" /></td>
          <td className='title'>{p.title}</td>
          <td className='price'>${p.price}</td>
          <td>
            <div className="count-area">
               <button className='mnsBtn'
               disabled={p.count==1}
               onClick={()=>dispatch(decrement(p._id))}>-</button>
            <p className='count'>{p.count}</p>
            <button className='plsBtn' onClick={()=>dispatch(increment(p._id))}>+</button>
            </div>
           
          </td>
          <td>
            <Button variant='danger' className='remove'
            onClick={()=>dispatch(removeBasket(p._id))}>Remove </Button>
          </td>
        </tr>
          )
          )
        }
      </tbody>
      <p className='total'>Total Price: ${total}</p>
    </Table>
    </div>
  )
}

export default Basket
