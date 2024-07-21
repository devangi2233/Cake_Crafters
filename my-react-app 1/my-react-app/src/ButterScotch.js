import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButterscotchCakeProduct = ({ id, imageUrl, name, price, discount, addToCart }) => {
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

const ButterscotchCakeSection = ({ addToCart }) => {
    return (
        <div className="container-fluid mt-5 mb-5" id="butterscotch">
            <div className="heading-line text-center mb-5" data-aos="zoom-in">
                <span className="heading-up text-center text-blue font-weight p-1">Butterscotch Cake</span>
            </div>
            <div className="container">
                <div className="row no-gutters pt-2">
                    <ButterscotchCakeProduct
                        id={1}
                        imageUrl="Images/delicious-butterscotch-cake-cake2282butt-AA.jpg"
                        name="Butterscotch Cake"
                        price={349}
                        discount={10}
                        addToCart={addToCart}
                    />
                    <ButterscotchCakeProduct
                        id={2}
                        imageUrl="Images/scrumptious-butterscotch-glaze-cake-cake3452butt-A.jpg"
                        name="Scrumptious Cake"
                        price={249}
                        discount={10}
                        addToCart={addToCart}
                    />
                    <ButterscotchCakeProduct
                        id={3}
                        imageUrl="Images/sq-butterscotch-cake0003butt-AA.jpg"
                        name="Sq Butterscotch Cake"
                        price={449}
                        discount={15}
                        addToCart={addToCart}
                    />
                    <ButterscotchCakeProduct
                        id={4}
                        imageUrl="Images/round-shaped-butterscotch-cake-4-cake892butt-AA.jpg"
                        name="Round Butterscotch"
                        price={799}
                        discount={10}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default ButterscotchCakeSection;
