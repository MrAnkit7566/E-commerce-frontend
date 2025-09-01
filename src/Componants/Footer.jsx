import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
      <footer className="text-dark mt-5 p-4"style={{backgroundColor:"#e3f2fd"}}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best products and services to our customers.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-dark text-decoration-none">Home</Link></li>
              <li><Link href="#" className="text-dark text-decoration-none">Shop</Link></li>
              <li><Link href="#" className="text-dark text-decoration-none">Contact</Link> <Link to="tel:9755416219" className="calling text-danger "style={{textDecoration:"none"}}>
                    7566852962</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <Link href="#" className="text-dark me-3 text-decoration-none"><FaFacebook color="#1877F2" size={20}/></Link>
            <Link href="#" className="text-dark me-3 text-decoration-none"><FaInstagram size={20} color="#E1306C" /></Link>
            <Link href="#" className="text-dark text-decoration-none"> <FaTwitter size={20} color="#1DA1F2" /></Link>
          </div>
        </div>

        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} My Company. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer