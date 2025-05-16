import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import './basket.css'
import { decrement, increment, remove } from '../../redux/features/basket';

function Basket() {
let {basket}=useSelector(p=>p.basket)
  let dispatch=useDispatch()
  let total=basket.reduce((acc,sum)=>acc+sum.count+sum.price,0)

  return (
    <div id="basket-area">
      <div className="basket-header">
        <h5><span style={{fontSize:"14px"}}>Home/</span>Cart</h5>
      </div>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Text</th>
          <th>Price</th>
          <th>Count</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        basket && basket.map(p=>(
           <tr>
          <td><img src={p.image} alt="" className='image' /></td>
          <td><h5>{p.title}</h5></td>
          <td className='text'>{p.text}</td>
          <td className='price'>${p.price}</td>
          <td>
            <div className="count-area">
              <button className='mnsBtn' onClick={()=>dispatch(decrement(p._id))}>-</button>
              <p>{p.count}</p>
              <button className='plsBtn' onClick={()=>dispatch(increment(p._id))}>+</button>
            </div>
          </td>
          <td><Button onClick={()=>dispatch(remove(p._id))}>x</Button></td>
        </tr>
        ))
      }
      </tbody>
      <button className='total'>Total price: ${total}</button>
    </Table>
    
    </div>
    
  );
}

export default Basket;