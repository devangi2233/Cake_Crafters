// import React from 'react';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import { Link } from 'react-router-dom';

// function CartPage({ cart, removeFromCart }) {
//     const handleRemove = (index) => {
//         removeFromCart(index);
//     };

//     // Calculate total value of the cart
//     const total = cart.reduce((acc, item) => acc + item.price, 0);

//     return (
//         <div>
//             <Navbar cart={cart}/>
//             <div className="container">
//                 <h2 className="mt-5 mb-3">Cart</h2>
//                 {cart && cart.length > 0 ? (
//                     <>
//                         <table className="table table-bordered">
//                             <thead className="thead-dark">
//                                 <tr>
//                                     <th>Name</th>
//                                     <th>Price</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {cart.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.name}</td>
//                                         <td>Rs. {item.price}</td>
//                                         <td>
//                                             <button className="btn btn-danger" onClick={() => handleRemove(index)}>Remove</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <div className="text-right">
//                             <p>Total: Rs. {total}</p>
//                             <button className="btn btn-primary"><Link to="/placeorder" className="btn btn-primary">Checkout</Link></button>
//                             <br></br>
//                         </div>
//                     </>
//                 ) : (
//                     <p className="mt-3">Your cart is empty.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CartPage;




// CartPage.js
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

function CartPage({ cart, removeFromCart }) {
    const handleRemove = (index) => {
        removeFromCart(index);
    };

    // Calculate total value of the cart
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <Navbar cart={cart}/>
            <div className="container">
                <h2 className="mt-5 mb-3">Cart</h2>
                {cart && cart.length > 0 ? (
                    <>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>Rs. {item.price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleRemove(index)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-right">
                            <p>Total: Rs. {total}</p>
                            {/* Navigate to PlaceOrder page with total as query parameter */}
                            <Link to={{ pathname: "/placeorder", search: `?total=${total}` }} className="btn btn-primary">Checkout</Link>
                            <br></br>
                        </div>
                    </>
                ) : (
                    <p className="mt-3">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
}

export default CartPage;

