// Navbar.js
import React, { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
    const [cartCount, setCartCount] = useState(0);
    const [userEmail, setUserEmail] = useState("");
    // Assuming user email comes from some state or props
    // Update cart count when cart prop changes
    useEffect(() => {
        setCartCount(cart.length);
    }, [cart]);

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ fontSize: '23px', fontWeight: 'bolder', backgroundColor: '#082736' }}>
            <img src="/images/logo.png" width="260" height="90" className="d-inline-block align-top" alt="" />
            <a className="navbar-brand" href="#">
                {/* Cake Crafters */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0" style={{ paddingLeft: '600px' }}>
                    <li className="nav-item ml-3">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item ml-3 active">
                        <Link className="nav-link" to="/product">Product</Link>
                    </li>
                    <li className="nav-item ml-3">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item ml-3">
                        <Link to="/order" className="nav-link">Order</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/cart">
                            <i className="fa-solid fa-cart-shopping nav-icon">
                                <span className="badge badge-danger">
                                    {cartCount}
                                </span>
                            </i>
                        </Link>
                    </li>

                    <li className="nav-item mr-3">
                        <a href="#" className="nav-link" data-toggle="popover" data-placement="bottom" title={userEmail} data-content="<a href='signup.html'>Sign Up</a>">
                            <i className="fa-solid fa-user nav-icon"></i>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
