import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RedVelvetCakeProduct = ({ id, imageUrl, name, price, discount, addToCart }) => {
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

const RedVelvetCakeSection = ({ addToCart }) => {
    return (
        <div className="container-fluid mt-5 mb-5" id="redvalvet">
            <div className="heading-line text-center mb-5" data-aos="zoom-in">
                <span className="heading-up text-center text-blue font-weight p-1">Red Velvet Cake</span>
            </div>
            <div className="container">
                <div className="row no-gutters pt-2">
                    <RedVelvetCakeProduct
                        id={1}
                        imageUrl="Images/sq-dripping-with-deliciousness-red-velvet-cake-cake2297redv-D_0.jpg"
                        name="Sq Red Valvet"
                        price={699}
                        discount={10}
                        addToCart={addToCart}
                    />
                    <RedVelvetCakeProduct
                        id={2}
                        imageUrl="Images/sq-red-velvet-cake0027reex-AD_0.jpg"
                        name="Red Valvet Cake"
                        price={549}
                        discount={15}
                        addToCart={addToCart}
                    />
                    <RedVelvetCakeProduct
                        id={3}
                        imageUrl="Images/sq-red-velvet-cake-with-choco-sticks-cake1630redv-A_0.jpg"
                        name="Choco Red Valvet"
                        price={649}
                        discount={10}
                        addToCart={addToCart}
                    />
                    <RedVelvetCakeProduct
                        id={4}
                        imageUrl="Images/sq-red-velvet-fruit-cake0037refr-A_0.jpg"
                        name="Red Valvet Fruit"
                        price={749}
                        discount={10}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default RedVelvetCakeSection;
