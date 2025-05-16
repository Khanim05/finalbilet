import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import './admin.css'
import { useEffect, useState } from 'react';
import { addProduct, delProduct, getProduct } from '../../redux/features/product';
 import { useFormik } from 'formik';
 import Form from 'react-bootstrap/Form';


function Basket() {
let {products}=useSelector(p=>p.product)
  let dispatch=useDispatch()
  let [open,setOpen]=useState(false)

   const {values,resetForm,handleChange,handleSubmit} = useFormik({
     initialValues: {
       image: '',
       title: '',
       text: '',
       price: '',
       description: '',
       
     },
     onSubmit: values => {
       dispatch(addProduct(values))
       resetForm()
       setOpen(false)
     },
   });

useEffect(()=>{
  dispatch(getProduct())
},[dispatch,values])
  return (
    <div id="basket-area">
      <div className="basket-header">
        <h5><span style={{fontSize:"14px"}}>Home/</span>Admin</h5>
      </div>

     {
      open && ( <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter image</Form.Label>
        <Form.Control
        name='image'
        onChange={handleChange}
        value={values.image}
         type="text" 
         placeholder="Enter image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter title</Form.Label>
        <Form.Control
        name='title'
        onChange={handleChange}
        value={values.title}
         type="text" 
         placeholder="Enter title" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter text</Form.Label>
        <Form.Control
        name='text'
        onChange={handleChange}
        value={values.text}
         type="text" 
         placeholder="Enter text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter price</Form.Label>
        <Form.Control
        name='price'
        onChange={handleChange}
        value={values.price}
         type="text" 
         placeholder="Enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter description</Form.Label>
        <Form.Control
        name='description'
        onChange={handleChange}
        value={values.description}
         type="text" 
         placeholder="Enter description" />
      </Form.Group>

      <Button variant='success' type='submit'>Add product</Button>
    </Form>)
     }

      <Button className='create' onClick={()=>setOpen(!open)}>Create</Button>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Text</th>
          <th>Price</th>
          <th><p>Description</p></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        products && products.map(p=>(
           <tr>
          <td><img src={p.image} alt="" className='image' /></td>
          <td><h5>{p.title}</h5></td>
          <td className='text'>{p.text}</td>
          <td className='price'>${p.price}</td>
          <td className='desc'>{p.description}</td>
          <td><Button onClick={()=>dispatch(delProduct(p._id))}>x</Button></td>
        </tr>
        ))
      }
      </tbody>
    </Table>
    
    </div>
    
  );
}

export default Basket;