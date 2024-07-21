import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CakeCategories() {
    return (
        <div className="container-fluid pt-5 pb-2 bg-white">
            <h4 className="text-center text-green font-weight pb-1" data-aos="zoom-in">Our Cakes</h4>
            <h3 className="text-center text-blue font-weight mb-3" data-aos="zoom-in">Elevate Every Occasion with Our Irresistible Cakes</h3>

            <div className="container-fluid pt-2 pb-5">
                <div className="row no-gutters">
                    <CakeCategoryLink link="#chocolate" title="Chocolate" />
                    <CakeCategoryLink link="#redvalvet" title="Red Valvet" />
                    <CakeCategoryLink link="#fruit" title="Fruit Cake" />
                    <CakeCategoryLink link="#blueberry" title="BlueBerry" />
                    <CakeCategoryLink link="#vanilla" title="Vanilla" />
                    <CakeCategoryLink link="#butterscotch" title="Butterscotch" />
                </div>
            </div>
        </div>
    );
}

function CakeCategoryLink({ link, title }) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-3">
            <a href={link} className="card-link">
                <div className="card card-border-radius" data-aos="zoom-in">
                    <div className="card-body pt-3 pb-1 text-center">
                        <h5 className="card-title"><b>{title}</b></h5>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CakeCategories;
