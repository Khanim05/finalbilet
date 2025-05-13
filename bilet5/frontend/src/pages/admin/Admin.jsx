import { useEffect, useState } from 'react'
import './admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteprod, getProducts } from '../../redux/featured/productSlice';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import schema from '../../schema/Schema';


const Admin = () => {
  const { products } = useSelector(p => p.product)

  const dispatch = useDispatch()

  const [open,setOpen]=useState(false)

  const {values,errors,handleChange,handleSubmit,resetForm} = useFormik({
     initialValues: {
       image: '',
       title:'',
       price:'',
       description:'',
     },
     onSubmit: values => {
       dispatch(addProduct(values))
       resetForm()
       setOpen(false)
     },
     validationSchema:schema
   });

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])



  return (
    <div>
      <div className="headerCart">
        <p>Admin Page</p>
      </div>
      {
        open && (
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text"
         placeholder="Enter Image" 
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
        <Form.Control 
        type="text"
         placeholder="Enter Title"
         name='title'
        value={values.title}
        onChange={handleChange} />
        {
          errors.title ? <span style={{color:"red"}}>{errors.title}</span> : null
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" 
         name='price'
        value={values.price}
        onChange={handleChange}/>
        {
          errors.price ? <span style={{color:"red"}}>{errors.price}</span> : null
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"
         name='description'
        value={values.description}
        onChange={handleChange} />
        {
          errors.description ? <span style={{color:"red"}}>{errors.description}</span> : null
        }
      </Form.Group>
      <Button variant='success' type='submit'>Add product</Button>
    </Form>
        )
      }
      <Button variant='primary' className='createBtn' onClick={()=>setOpen(!open)}>Create</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((p) => (
              <tr>
                <td><img src={p.image} alt="" className='image' /></td>
                <td className='title'>{p.title}</td>
                <td className='price'>${p.price}</td>

                <td>
                  <Button variant='danger' className='removeBtn' onClick={()=>dispatch(deleteprod(p._id))}>Remove</Button>
                </td>
              </tr>
            ))
          }

        </tbody>

      </Table>
    </div>
  )
}

export default Admin
