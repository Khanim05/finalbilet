import React from 'react'
import Table from 'react-bootstrap/Table';
import './basket.css'
import {useDispatch, useSelector} from 'react-redux'

import Button from 'react-bootstrap/Button';

const Basket = () => {
  let {basket}=useSelector(p=>p.basket)
  let dispatch=useDispatch()
  let total=basket.reduce((acc,sum)=>acc+sum.count*sum.price,0)
  return (
    <div id='basket-area'>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Text</th>
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
          <td><img src={p.image} alt="" /></td>
          <td>{p.text}</td>
          <td>{p.title}</td>
          <td>${p.price}</td>
          <td>
            <div className="count-area">
              <button>-</button>
              <p>{p.count}</p>
              <button>+</button>
            </div>
           </td> 
          
          <td><Button variant='danger'>Remove</Button></td>
        </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Basket
