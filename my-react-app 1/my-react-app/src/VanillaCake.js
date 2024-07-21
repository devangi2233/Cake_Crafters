import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const VanillaCakeProduct = ({ id, imageUrl, name, price, discount, addToCart }) => {
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
                    <a href="payment.php" className="payment-href"><button type="button" className="btn btn-success btn-block">Order Now</button></a>
                </div>
            </div>
        </div>
    );
}

const VanillaCakeSection = ({ addToCart }) => {
    return (
        <div className="container-fluid mt-5 mb-5" id="vanilla">
            <div className="heading-line text-center mb-5" data-aos="zoom-in">
                <span className="heading-up text-center text-blue font-weight p-1">Vanilla Cake</span>
            </div>
            <div className="container">
                <div className="row no-gutters pt-2">
                    <VanillaCakeProduct
                        id={1}
                        imageUrl="Images/tempting-choco-vanilla-cake-cake3454choc-A.jpg"
                        name="Choco Vanilla Cake"
                        price={299}
                        discount={10}
                        addToCart={addToCart}
                    />
                    <VanillaCakeProduct
                        id={2}
                        imageUrl="Images/sq-choco-vanilla-cake-2-cake893chva-A_1.jpg"
                        name="Sq Vanilla Cake"
                        price={399}
                        discount={18}
                        addToCart={addToCart}
                    />
                    <VanillaCakeProduct
                        id={3}
                        imageUrl="Images/sq-choco-vanilla-cake0006chva-AA.jpg"
                        name="Tempting Vanilla"
                        price={449}
                        discount={10}
                        addToCart={addToCart}
                    />
                    <VanillaCakeProduct
                        id={4}
                        imageUrl="Images/sq-round-shaped-vanilla-cake-4-cake904vani-AA.jpg"
                        name="Rounded Vanilla"
                        price={249}
                        discount={15}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default VanillaCakeSection;
