import React from "react";
import './sideNav.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './registration';
import Booklist from "./Booklist";
function SideNav() {
    return (
        <Router>
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/newarrivals">New Arrivals</Link></li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/catgories">Categories</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
        <Routes>
        <Route path="/home" element={<Booklist/>}></Route>
        <Route path="/registration" element={<RegistrationForm/>}>
        </Route>
    </Routes>
    </Router>
    );
    
    
}
export default SideNav; 