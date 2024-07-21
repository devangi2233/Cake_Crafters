import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FruitCakeProduct = ({ id, imageUrl, name, price, discount, addToCart }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className="card card-border-radius" data-aos="fade-right">
                <div className="img-container p-3 border-radius">
                    <img src={imageUrl} className="card-img" alt="..." />
                </div>
                <div className="card-body pt-1 text-left">
                    <h5 className="card-title"><b>{name}</b></h5>
                    <p className="card-text text-left">Rs. {price} {discount && <span className="text-green pl-2">({discount}% off)</span>}</p>
                    <input type="hidden" name="Item_Name" value={name} />
                    <input type="hidden" name="Price" value={price} />
                    <button onClick={() => addToCart({ id, name, price })} className="btn btn-warning btn-block mb-2">Add To Cart</button>
                    <a href="payment.php" className="payment-href"><button type="button" className="btn btn-success btn-block">Order Now</button></a>
                </div>
            </div>
        </div>
    );
}

const FruitCakeSection = ({ addToCart }) => {
    return (
        <div className="container-fluid mt-5 mb-5" id="fruit">
            <div className="heading-line text-center mb-5" data-aos="zoom-in">
                <span className="heading-up text-center text-blue font-weight p-1">Fruit Cake</span>
            </div>
            <div className="container">
                <div className="row no-gutters pt-2">
                    <FruitCakeProduct
                        id={1}
                        imageUrl="Images/sq-vanilla-fruit-cake-cake894frui-AA.jpg"
                        name="Vanilla Fruit Cake"
                        price={599}
                        discount={20}
                        addToCart={addToCart}
                    />
                    <FruitCakeProduct
                        id={2}
                        imageUrl="Images/sq-fresh-fruit-cake0014frui-AA.jpg"
                        name="Fruit Cake"
                        price={499}
                        discount={15}
                        addToCart={addToCart}
                    />
                    <FruitCakeProduct
                        id={3}
                        imageUrl="Images/heart-shaped-fruit-cake-3-cake0742frui-AA.jpg"
                        name="Heart Cake"
                        price={599}
                        discount={18}
                        addToCart={addToCart}
                    />
                    <FruitCakeProduct
                        id={4}
                        imageUrl="Images/sq-orange-hollow-cake-cake0731oran-A_0.jpg"
                        name="Donut Cake"
                        price={849}
                        discount={10}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default FruitCakeSection;
