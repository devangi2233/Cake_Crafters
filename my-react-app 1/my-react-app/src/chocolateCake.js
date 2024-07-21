    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './index.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import CartPage from './cart';

    function ChocolateCakeProduct({ id, imageUrl, name, price, discount, addToCart }) {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                <div className="card card-border-radius" data-aos="fade-right">
                    <div className="img-container p-3 border-radius">
                        <img src={imageUrl} className="card-img" alt="..." />
                    </div>
                    <div className="card-body pt-1 text-left">
                        <h5 className="card-title"><b>{name}</b></h5>
                        <p className="card-text text-left">Rs. {price} {discount && <span className="text-green pl-2">({discount}% off)</span>}</p>
                        <button onClick={() => addToCart({ id, name, price })} className="btn btn-warning btn-block mb-2">Add To Cart</button>
                        <Link to={`/payment/${id}`} className="payment-href"><button type="button" className="btn btn-success btn-block">Order Now</button></Link>
                    </div>
                </div>
            </div>
        );
    }

    function ChocolateCakeSection({addToCart}) {

        return (
            <div className="container-fluid" id="chocolate">
                <div className="heading-line text-center mb-5" data-aos="zoom-in"><span className="heading-up text-center text-blue font-weight p-1">Chocolate Cake</span></div>
                <div className="container">
                    <div className="row no-gutters pt-2">
                        <ChocolateCakeProduct
                            id={1}
                            imageUrl="Images/choco-nutella-hazelnut-cake-cake3216haze-BB.jpg"
                            name="Hazelnut Cake"
                            price={649}
                            discount={10}
                            addToCart={addToCart}
                        />
                        <ChocolateCakeProduct
                            id={2}
                            imageUrl="Images/opera-choco-cake-cake2637choc-A.jpg"
                            name="Opera Choco Cake"
                            price={449}
                            discount={20}
                            addToCart={addToCart}
                        />
                        <ChocolateCakeProduct
                            id={3}
                            imageUrl="Images/sq-kitkat-chocolate-cake-cake1119choc-AA_0.jpg"
                            name="Kitkat Cake"
                            price={549}
                            discount={15}
                            addToCart={addToCart}
                        />
                        <ChocolateCakeProduct
                            id={4}
                            imageUrl="Images/sq-chocolate-cake-2-cake0749flav-A_1.jpg"
                            name="Sq Chocolate Cake"
                            price={349}
                            discount={10}
                            addToCart={addToCart}
                        />
                    </div>
                </div>
            </div>
        );
    }

    export default ChocolateCakeSection;
