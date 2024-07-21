import React from 'react';
import './index.css'; // Assuming you have your CSS file imported
import 'bootstrap/dist/css/bootstrap.min.css';

function SpecialityProductCard({ imageUrl, title, price, discount }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <form action="manage_cart.php" method="POST">
                <div className="card card-border-radius" data-aos="fade-right">
                    <div className="img-container p-3 border-radius">
                        <img src={imageUrl} className="card-img" alt="..." />
                    </div>
                    <div className="card-body pt-1 text-left">
                        <h5 className="card-title"><b>{title}</b></h5>
                        <p className="card-text text-left">Rs. {price} <span className="text-green pl-2">({discount}% off)</span></p>
                        <input type="hidden" name="Item_Name" value={title} />
                        <input type="hidden" name="Price" value={price} />
                        <button type="submit" name="addtocart" className="btn btn-warning btn-block mb-2">Add To Cart</button>
                        <a href="payment.php" className="payment-href"><button type="button" className="btn btn-success btn-block">Order Now</button></a>
                    </div>
                </div>
            </form>
        </div>
    );
}

function SpecialitySection() {
    return (
        <div className="container-fluid pt-5 pb-5" style={{ backgroundColor: '#ffe9e9' }}>
            <h4 className="text-center text-blue font-weight pb-2" data-aos="zoom-in">Our Speciality</h4>
            <h3 className="text-center text-blue font-weight mb-3" data-aos="zoom-in">Creating Confections that Capture Hearts</h3>
            <div className="container">
                <div className="row no-gutters">
                    <SpecialityProductCard
                        imageUrl="Images/delicious-butterscotch-cake-cake2282butt-AA.jpg"
                        title="Chocolate Butterscotch"
                        price={849}
                        discount={15}
                    />
                    <SpecialityProductCard
                        imageUrl="Images/sq-orange-hollow-cake-cake0731oran-A_0.jpg"
                        title="Orange Hollow Cake"
                        price={599}
                        discount={10}
                    />
                    <SpecialityProductCard
                        imageUrl="Images/sq-mango-cake0020frui-A_2.jpg"
                        title="Mango Cake"
                        price={649}
                        discount={20}
                    />
                    <SpecialityProductCard
                        imageUrl="Images/sq-ferrero-rocher-cake-cake1140choc-AA.jpg"
                        title="Ferrero Rocher Cake"
                        price={749}
                        discount={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default SpecialitySection;
