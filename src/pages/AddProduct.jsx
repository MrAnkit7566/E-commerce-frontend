import React, { useState } from 'react'
import { addProduct } from '../services/productService'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function AddProduct() {

  const [productData,setProductData] = useState({
    productImage:"",
    productName:"",
    category:"",
    description:"",
    ratings:"",
    price:"",
    isFreeDelivery:"",
  });

  const handleChange =(e)=>{
    setProductData({...productData,[e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await addProduct(productData);
      toast.success(res.data.msg);      
    } catch (error) {
      toast.error(error.response?.data?.msg || "Signup Failed");
    }
  }


  return (
    <div className='addproduct-bg d-flex justify-content-center'>
      
      <form className='card w-50 p-3 m-5 bg-primary bg-opacity-25'onSubmit={handleSubmit}>
        <h3 className='form-title text-center'>Add Your Product</h3><br />
          <input type="text" name='productName' placeholder='Product Name' className='form-control' value={productData.productName} onChange={handleChange}/><br />

          <select className="form-select" name='category' aria-label="Default select example" value={productData.category} onChange={handleChange}>
               <option value="" disabled>Select Category</option>
               <option defaultValue="electronics">Electronics</option>
               <option value="clothing">Clothing</option>
               <option value="food">Food</option>
               <option value="books">Books</option>
               <option value="furniture">Furniture</option>
          </select><br />

          <input type="text" name='description' placeholder='Description' className='form-control' value={productData.description} onChange={handleChange}/><br />

          <input type="number" name='ratings' placeholder='Ratings' className='form-control'value={productData.ratings} onChange={handleChange} /><br />

          <input type="number" name='price' placeholder='Price' className='form-control' value={productData.price} onChange={handleChange}/><br />

          <input type="text" name='productImage' placeholder='Product Image URL' className='form-control' value={productData.productImage} onChange={handleChange}/><br />


         <div className='d-flex gap-3'>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isFreeDelivery"
                value="true"
                checked={productData.isFreeDelivery === "true"}
                onChange={handleChange}
              />
              <label className="form-check-label">Free Delivery</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isFreeDelivery"
                value="false"
                checked={productData.isFreeDelivery === "false"}
                onChange={handleChange}
              />
              <label className="form-check-label">Not Free Delivery</label>
            </div>
          </div>
<br />

          <button className='btn btn-secondary w-100'>Enter</button>
      </form>
    </div>
  )
}
