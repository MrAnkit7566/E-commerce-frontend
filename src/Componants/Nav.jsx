import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";

import { FaShoppingCart, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from 'react-bootstrap';



export default function Nav({openLogin}) {
   const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <nav className='d-flex gap-3' style={{backgroundColor:"#e3f2fd"}}>
      <Container className="navbar navbar-expand-lg  p-2">
        <Link to="/" className='navbar-brand fw-bold'>Your Mart</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav ms-auto fw-bold'>
            <li className='nav-item fs-5'>
              <Link to="/" className='nav-link text-decoration-none'>Home</Link>
            </li>
            <li className='nav-item fs-5'>
              <Link to="/add-Product" className='nav-link text-decoration-none'>Add Product</Link>
            </li>

            <li className='nav-item fs-5'>
              <Link to="/order" className='nav-link text-decoration-none'>Order</Link>
            </li>

            <li className='nav-item fs-5'>
              <Link to="/profile" className='nav-link text-decoration-none'><FaUser/></Link>
            </li>

            <li className='nav-item fs-5'>
              <Link to="/cart" className='nav-link text-decoration-none'><FaShoppingCart/></Link>
            </li>
          </ul>
          
        </div>
        {token ? (
            <button  onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <button onClick={openLogin} className="btn btn-primary ms-3">
              Login
            </button>
          )}
      </Container>
    </nav>
  );
}
