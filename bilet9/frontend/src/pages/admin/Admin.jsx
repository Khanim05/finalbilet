import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './admin.css'
import { addProduct, delProduct, getProduct } from '../../redux/features/product';
 import { useFormik } from 'formik';
 import Form from 'react-bootstrap/Form';
import schema from '../../schema/schema';




const Admin = () => {
  let {products}=useSelector(p=>p.product)
  let dispatch=useDispatch()

   const {values,errors,handleChange,handleSubmit,resetForm} = useFormik({
     initialValues: {
       image: '',
       title: '',
       text: '',
       price: '',
       description: ''

     },
     onSubmit: values => {
       dispatch(addProduct(values))
       setOpen(false)
       resetForm()
     },

     validationSchema:schema
   });

  let [open,setOpen]=useState(false)
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  return (
    <div id='admin-area'>
      <div className="header">
        <h1>Admin Page</h1>
      </div>
      {
        open && (
           <Form onSubmit={handleSubmit}>
            <p>Create Product</p>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text"
        name='image'
        value={values.image}
        onChange={handleChange}
         placeholder="Enter image" />
          {
         errors.image ? <span style={{color:"red"}}>{errors.image}</span> : null
         }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"
        name='title'
        value={values.title}
        onChange={handleChange}
         placeholder="Enter title" />
          {
         errors.title ? <span style={{color:"red"}}>{errors.title}</span> : null
         }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text"
        name='text'
        value={values.text}
        onChange={handleChange}
         placeholder="Enter text" />
          {
         errors.text ? <span style={{color:"red"}}>{errors.text}</span> : null
         }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"
        name='price'
        value={values.price}
        onChange={handleChange}
         placeholder="Enter price" />
          {
         errors.price ? <span style={{color:"red"}}>{errors.price}</span> : null
         }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"
        name='description'
        value={values.description}
        onChange={handleChange}
         placeholder="Enter description" />
         {
         errors.description ? <span style={{color:"red"}}>{errors.description}</span> : null
         }
      </Form.Group>
      <Button variant='success' type='submit'>Add product</Button>
    </Form>
        )
      }
      <Button className='create' variant='primary' onClick={()=>setOpen(!open)}>Create</Button>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Text</th>
          <th>Price</th>
          <th>Description</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {
         products && products.map((p)=>(
            <tr>
          <td><img src={p.image} alt=""  className='image'/></td>
          <td><h5>{p.title}</h5></td>
          <td className='text'>{p.text}</td>
          <td className='price'>${p.price}</td>
          <td className='desc'>{p.description}</td>
          
          <td><Button variant="primary" onClick={()=>dispatch(delProduct(p._id))}>x</Button></td>
        </tr>
          ))
        }
      </tbody>
      
    </Table>
    
    </div>
  )
}

export default Admin
