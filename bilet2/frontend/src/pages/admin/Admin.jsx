import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./admin.css";
import {
  addProduct,
  deleteProducts,
  getAllProducts,
} from "../../redux/features/productSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { schema } from "../../schema/Schema";

const Admin = () => {
  let dispatch = useDispatch();
  const { values, handleChange, handleSubmit,errors, resetForm } = useFormik({
    initialValues: {
      image: "",
      name: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(addProduct(values));
      dispatch(getAllProducts(
        
      ))
      resetForm();
      setOpen(false);
    },
  validationSchema:schema
  });
  let { allProducts } = useSelector((p) => p.product);

  let [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div id="basket-area">
      <div className="card-area">
        <h2 className="cards">Admin Page</h2>
      </div>

      {open && (
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image</Form.Label>
            <Form.Control
            name="image"
              type="url"
              placeholder="Image"
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
            name="name"
              type="text"
              placeholder="Title"
              value={values.name}
              onChange={handleChange}
            />
             {
              errors.name ? <span style={{color:"red"}}>{errors.name}</span> : null
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
            name="price"
              type="text"
              placeholder="Price"
              value={values.price}
              onChange={handleChange}
            />
             {
              errors.price? <span style={{color:"red"}}>{errors.price}</span> : null
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
            name="description"
              type="text"
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
            />
             {
              errors.description ? <span style={{color:"red"}}>{errors.description}</span> : null
            }
          </Form.Group>

          <Button variant="success" className="mb-3"
          type="submit">
            Add Product
          </Button>
        </Form>
      )}

      <Button variant="primary"
       onClick={() => setOpen(!open)}>
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
          {allProducts &&
            allProducts.map((p) => (
              <tr>
                <td>
                  <img src={p.image} alt="" className="image" />
                </td>
                <td className="title">{p.name}</td>
                <td className="price">${p.price}</td>
                <td></td>
                <td>
                  <button
                    className="removeBtn"
                    onClick={() => dispatch(deleteProducts(p._id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
