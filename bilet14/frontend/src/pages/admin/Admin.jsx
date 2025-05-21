
import './admin.css'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { addProduct, delProduct, getProduct } from '../../redux/features/product';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
const Admin = () => {
  let { allProduct } = useSelector(p => p.product)
  let dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      image: '',
      title: '',
      price: '',
      description: '',
    },
    onSubmit: values => {
      dispatch(addProduct(values))
    },
  });

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch,values])
  return (
    <div id='basket-area'>
      <div className="container">
        <div className="header">
          <p>Admin Page</p>
        </div>
        {
          open && (<Form>
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

          </Form>
          )
        }
        <Button variant='primary' style={{ width: "140px" }} onClick={() => setOpen(!open)}>Create</Button>
        <Table striped bordered hover variant="dark">
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
              allProduct && allProduct.map(p => (
                <tr>
                  <td><img className='image' src={p.image} alt="" /></td>
                  <td><h5>{p.title}</h5></td>
                  <td><p>${p.price}</p></td>
                  <td><p className='description'>{p.description}</p></td>

                  <td><Button variant="danger" style={{ backgroundColor: "red" }} onClick={() => dispatch(delProduct(p._id))}>Remove</Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default Admin
