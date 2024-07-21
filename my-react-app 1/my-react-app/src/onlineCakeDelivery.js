import React from 'react';
import './index.css'; // Assuming you have your CSS file imported
import 'bootstrap/dist/css/bootstrap.min.css';

function CakeCard({ imageUrl, title }) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-3">
            <a href="product.php" className="card-href">
                <div className="card card-shadow" data-aos="zoom-in-up">
                    <img src={imageUrl} className="card-img" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
}

function OnlineCakeDelivery() {
    return (
        <div className="container-fluid pt-5 pb-5" style={{ backgroundColor: '#ffe9e9' }}>
            <h4 className="text-center text-blue font-weight pb-2" data-aos="fade-down">Online Cake Delivery</h4>
            <h3 className="text-center text-blue font-weight mb-3" data-aos="fade-up">Elevate Every Occasion with Our Irresistible Cakes</h3>

            <div className="row no-gutters">
                <CakeCard imageUrl="images/anniversary-photo-cake.jpg" title="Anniversary Cake" />
                <CakeCard imageUrl="images/rakhi.jpg" title="Festive Cake" />
                <CakeCard imageUrl="images/bomb-cake.jpg" title="Bomb Cake" />
                <CakeCard imageUrl="images/birthday-cake.jpg" title="Birthday Cake" />
                <CakeCard imageUrl="images/cartoon-cakes_0.jpg" title="Cartoon Cake" />
                <CakeCard imageUrl="Images/p-delish-motichoor-ladoo-cake-half-kg--188714-m.jpg" title="Ladoo Cake" />
            </div>
        </div>
    );
}

export default OnlineCakeDelivery;
