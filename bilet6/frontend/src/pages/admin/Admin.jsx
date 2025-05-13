
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './admin.css'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { addProduct, deleteProduct, getProduct } from '../../redux/features/product';
import Form from 'react-bootstrap/Form';
 import { useFormik } from 'formik';
import schema from '../../schema/Schema';

const Admin = () => {
  let {product}=useSelector(p=>p.product)
  let dispatch=useDispatch()
  let [open,setOpen]=useState(false)

  const {values,handleChange,handleSubmit,resetForm,errors} = useFormik({
     initialValues: {
       image: '',
       title:'',
       price:'',
       description:'',
     },
     onSubmit: values => {
       dispatch(addProduct(values));
       resetForm()
       setOpen(false)
     },
     validationSchema:schema
   });




  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch,values])
  return (
    <div id='basket-area'>
       <div className="headerBasket">
        <h2>Admin</h2>
      </div>
      {
        open && (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" 
        name='image'
        value={values.image}
        onChange={handleChange}
        />
        {
          errors.image ? <span style={{color:"red"}}>{errors.image}</span> : null
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" 
        name='title'
        value={values.title}
        onChange={handleChange}
        />
        {
          errors.title ? <span style={{color:"red"}}>{errors.title}</span> : null
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" 
        name='price'
        value={values.price}
        onChange={handleChange}
        />
        {
          errors.price? <span style={{color:"red"}}>{errors.price}</span> : null
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" 
        name='description'
        value={values.description}
        onChange={handleChange}
        />
        {
          errors.description ? <span style={{color:"red"}}>{errors.description}</span> : null
        }
      </Form.Group>
      <Button type='submit' variant='success'>Add product</Button>
    </Form>
    )
      }


      <Button variant='primary' className='create' onClick={()=>setOpen(!open)}>Create</Button>
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
          product && product.map((p)=>(
            <tr>
          <td><img src={p.image} alt="" className='image' /></td>
          <td className='title'>{p.title}</td>
          <td className='price'>${p.price}</td>
          <td>
          
          </td>
          <td> <Button variant="danger" onClick={()=>dispatch(deleteProduct(p._id))}>Remove</Button></td>
        </tr>
          ))
        }
      </tbody>
      
    </Table>
  

    </div>
  )
}

export default Admin

