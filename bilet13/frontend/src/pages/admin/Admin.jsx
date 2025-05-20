import React, { useEffect, useState } from 'react'
import './admin.css'
import {useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { addProduct, delProduct, getProduct } from '../../redux/features/product';
 import { useFormik } from 'formik';
 import Form from 'react-bootstrap/Form';
const Admin = () => {

const {values,handleChange,handleSubmit,errors,resetForm} = useFormik({
     initialValues: {
       image: '',
       title: '',
       price: '',
       description: '',
     },
     onSubmit: values => {
       dispatch(addProduct(values));
       resetForm();
       setOpen(false)
     },
   });
  let {product}=useSelector(p=>p.product)
  let dispatch=useDispatch()
  const [open,setOpen]=useState(false)

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch,values])
  return (
    <div id='basket-area'>
        <div className="header">
         <h1>Admin Page</h1>
      </div>
     {open && ( <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter image"
        name='image'
        value={values.image}
        onChange={handleChange}

         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter title"
        name='title'
        value={values.title}
        onChange={handleChange}

         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter price"
        name='price'
        value={values.price}
        onChange={handleChange}

         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter description"
        name='description'
        value={values.description}
        onChange={handleChange}

         />
         <Button variant='success' className='mt-3' type='submit'>Add product</Button>
      </Form.Group>
      
    </Form>)}

      <Button className='mt-3' onClick={()=>setOpen(!open)}>Create</Button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        product && product.map(p=>(
            <tr>
          <td><img src={p.image} alt=""  className='image'/></td>
          <td><h5>{p.title}</h5></td>
          <td>${p.price}</td>
          <td><p className='desc'>{p.description}</p></td>
            <td> <Button variant="primary" onClick={()=>dispatch(delProduct(p._id))}>Remove</Button></td>
        </tr>
        ))
      }

      </tbody>
  
    </Table>
    </div>
  )
}

export default Admin

