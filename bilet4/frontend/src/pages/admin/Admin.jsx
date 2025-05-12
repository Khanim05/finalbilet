import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import "./admin.css";
import { useEffect, useState } from "react";
import {
  addProduct,
  deleteProduct,
  getProduct,
} from "../../redux/features/productSlice";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import schema from "../../schema/schema";

const Admin = () => {
  let { products } = useSelector((p) => p.product);
  let [open, setOpen] = useState(false);
  let dispatch = useDispatch();

  const { values, handleSubmit, resetForm, errors, handleChange } = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      description: "",
    },
    onSubmit:(values) => {
     dispatch(addProduct(values));
      

      resetForm();
      setOpen(false);
    },

    validationSchema:schema
  });

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      {open && (
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control  
            name="image"
            type="text"
            placeholder="Enter Image"
            value={values.image}
            onChange={handleChange}
             />
             {
              errors.image ? <span style={{color:"red"}}>{errors.image}</span> : null
             }
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" name="title" value={values.title} onChange={handleChange}/>
            {
              errors.title ? <span style={{color:"red"}}>{errors.title}</span> :null
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price" name="price" value={values.price} onChange={handleChange} />
             {
              errors.price ? <span style={{color:"red"}}>{errors.price}</span> :null
            }
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" name="description" value={values.description} onChange={handleChange}/>
             {
              errors.description ? <span style={{color:"red"}}>{errors.description}</span> :null
            }
          </Form.Group>

          <Button variant="success" type="submit">
            Add Product
          </Button>
        </Form>
      )}

      <Button variant="primary" onClick={() => setOpen(!open)}>
        Create
      </Button>
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
          {products &&
            products.map((p) => (
              <tr>
                <td>
                  <img src={p.image} className="image" alt="" />
                </td>
                <td className="title">{p.title}</td>
                <td className="price">${p.price}</td>

                <td>
                  <Button
                    variant="danger"
                    className="remove"
                    onClick={() => dispatch(deleteProduct(p._id))}
                  >
                    Remove{" "}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
