import React from 'react';
import './index.css'; // Assuming you have your CSS file imported
import 'bootstrap/dist/css/bootstrap.min.css';

function ExclusiveProductCard({ imageUrl, title, price, discount }) {
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

function ExclusiveProductSection() {
    return (
        <div className="container-fluid pt-5 pb-5 bg-offwhite" data-os="fade">
            <h4 className="text-center text-blue font-weight pb-2" data-aos="zoom-in">Our Exclusive Product</h4>
            <h3 className="text-center text-blue font-weight mb-3" data-aos="zoom-in">From Our Oven to Your Heart: Celebrate with Heavenly Cakes</h3>
            <div className="container">
                <div className="row no-gutters">
                    <ExclusiveProductCard
                        imageUrl="Images/belgium-chocolate-mousse-cake-cake3217beli-A.jpg"
                        title="Chocolate Cake"
                        price={799}
                        discount={10}
                    />
                    <ExclusiveProductCard
                        imageUrl="Images/sq-toothsome-chocolate-with-yellow-blooms-rosecake2557choc-A_0.jpg"
                        title="Yellow Blooms"
                        price={699}
                        discount={20}
                    />
                    <ExclusiveProductCard
                        imageUrl="Images/sq-hawaiian-pineapple-cake0016pifr-AA.jpg"
                        title="PineApple Cake"
                        price={899}
                        discount={15}
                    />
                    <ExclusiveProductCard
                        imageUrl="Images/sq-ferrero-rocher-cake-cake1140choc-AA.jpg"
                        title="Ferrero Cake"
                        price={449}
                        discount={30}
                    />
                </div>

                <div className="row no-gutters">
                    <ExclusiveProductCard
                        imageUrl="Images/sq-coffee-mocha-cake0011coff-AA.jpg"
                        title="Coffee Cake"
                        price={649}
                        discount={12}
                    />
                    <ExclusiveProductCard
                        imageUrl="Images/sq-red-velvet-cake-with-choco-sticks-cake1630redv-A_0.jpg"
                        title="Red Velvet Cake"
                        price={999}
                        discount={10}
                    />
                    <ExclusiveProductCard
                        imageUrl="Images/sq-red-velvet-fruit-cake0037refr-A_0.jpg"
                        title="Fruit Cake"
                        price={549}
                        discount={20}
                    />
                    <ExclusiveProductCard
                        imageUrl="Images/sq-orange-hollow-cake-cake0731oran-A_0.jpg"
                        title="Orange Cake"
                        price={499}
                        discount={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default ExclusiveProductSection;
