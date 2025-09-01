import React,{useState} from 'react'
import Nav from './Componants/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import { ToastContainer } from "react-toastify";
import Footer from './Componants/Footer'
import Order from './pages/Order'


export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);
  return (
    <>
      <BrowserRouter>
        <Nav openLogin={openLoginModal} />

        {showLoginModal && (
          <Login
            closeModal={closeLoginModal}
            openSignupModal={() => {
              closeLoginModal();
              openSignupModal();
            }}
          />
        )}

        {showSignupModal && (
          <SignUp
            closeModal={closeSignupModal}
            openLoginModal={() => {
              closeSignupModal();
              openLoginModal();
            }}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}
