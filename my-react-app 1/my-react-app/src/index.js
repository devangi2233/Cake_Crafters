import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './test';
import Footer from './test1';
import SideNav from './test2';

import Signup from './signup';
import Login from './login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './product';
import Contact from './Contact_page';
import OrderPage from './order_page';
import Home from './home';
import PlacePage from './place_page';
import CartPage from './cart';
import Dashboard from './Dashboard';
import ThankYouPage from './thankyou';

const Main = () => {
  const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route path='/product' element={<Product addToCart={addToCart} />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/placeorder' element={<PlacePage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      <Route path='/thankyou' element={<ThankYouPage/>}/>
    </Routes>
  </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main/>);



