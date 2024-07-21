import React, { useState } from 'react';
import './styles.css';
import { useLocation } from 'react-router-dom';


function PlaceOrder() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const total = queryParams.get('total') || 0;


    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('');
    const [cake, setCake] = useState('');
    const [tag, setTag] = useState('');
    const [quantity, setQuantity] = useState('');
    const [text, setText] = useState('');
    const [topup, setTopup] = useState('');
    const [cashOnDelivery, setCashOnDelivery] = useState(false);

    


const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cashOnDelivery) {
        alert("Please select Cash on Delivery option.");
        return;
    }
    const formData = {
        name: name,
        email: email,
        contact: contact,
        city: city,
        address: address,
        cake: cake,
        tag: tag,
        quantity: quantity,
        text: text,
        topup: topup
    }

    const response = await fetch("http://localhost:4001/submit-placeorder", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        console.log('form submitted')
        redirectThankYou();
    } else {
        console.log('failed')
    }
};

const redirectThankYou = () => {
    window.location.href = "/thankyou"; 
};

return (
    <div className="container-fluid pt-5 pb-5 bg-offwhite">
        <div className="container bg-white pt-5">
            <h4 className="text-center text-green font-weight pb-1">Order Details</h4>
            <h3 className="text-center text-blue font-weight mb-1">A Secure Way to Place Your Order</h3>

            <div className="row no-gutters">
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-lg-5 p-md-3 p-sm-2 p-1">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputName4" style={{ fontSize: "20px" }}>Name</label>
                                    <input type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName4" placeholder="Enter Your Name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4" style={{ fontSize: "20px" }}>Email</label>
                                    <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" placeholder="Enter Your Email" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputContact4" style={{ fontSize: "20px" }}>Contact</label>
                                    <input type="number" name="Contact" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" id="inputContact4" placeholder="Enter Your Contact" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity4" style={{ fontSize: "20px" }}>City</label>
                                    <input type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" id="inputCity4" placeholder="Enter Your City" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" name="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="inputAddress" placeholder="Enter Your Delivery Location" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" style={{ fontSize: "20px" }}>Select Your Flavoured Cake</label>
                                    <select id="inputState" name="Cake" value={cake} onChange={(e) => setCake(e.target.value)} className="form-control" style={{ height: "37px" }} required>
                                        <option value="" selected>--None--</option>
                                        <option value="Chocolate Cake">Chocolate Cake</option>
                                        <option value="Pineapple Cake">Pineapple Cake</option>
                                        <option value="Red Valvet Cake">Red Valvet Cake</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" style={{ fontSize: "20px" }}>Please Select The Tag</label>
                                    <select id="inputState" name="Tag" value={tag} onChange={(e) => setTag(e.target.value)} className="form-control" style={{ height: "37px" }} required>
                                        <option value="" selected>--None--</option>
                                        <option value="Happy Birthday">Happy Birthday</option>
                                        <option value="Happy Anniversary">Happy Anniversary</option>
                                        <option value="Bady Shower">Bady Shower</option>
                                        <option value="Congrulations">Congrulations</option>
                                        <option value="Welcome">Welcome</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" style={{ fontSize: "20px" }}>Quantity</label>
                                    <select id="inputState" name="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ height: "37px" }} className="form-control" required>
                                        <option value="" selected>--None--</option>
                                        <option value="1 kg">1 kg</option>
                                        <option value="1.5 kg">1.5 kg</option>
                                        <option value="2 kg">2 kg</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row mt-2">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputZip" style={{ fontSize: "20px" }}>Text To be Written On Cake</label>
                                    <input type="text" name="Text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Eg. Happy Birthday John" className="form-control" id="inputZip" required />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState" style={{ fontSize: "20px" }}>Add Top Up</label>
                                    <select id="inputState" name="Topup" value={topup} onChange={(e) => setTopup(e.target.value)} style={{ height: "37px" }} className="form-control">
                                        <option value="" selected>--None--</option>
                                        <option value="Garnishing Chocolate">Garnishing Chocolate</option>
                                        <option value="Stickers">Stickers</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="cashOnDelivery"
                                    checked={cashOnDelivery}
                                    onChange={(e) => setCashOnDelivery(e.target.checked)} style={{marginTop:"2px",width:"20px",height:"30px",marginLeft:"-20px"}}
                                    />
                                <label className="form-check-label" htmlFor="cashOnDelivery">Cash on Delivery</label>
                            </div>

                            <h4>Total: Rs. {total}</h4>

                            <div className="container-fluid mt-4 d-flex justify-content-center">
                                <button type="submit" name="place_order" className="btn btn-success btn-block">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default PlaceOrder;
