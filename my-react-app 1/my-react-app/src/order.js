import React, { useState } from 'react';

function OrderTracker() {
    const [id, setId] = useState('');
    const [orderDetails, setOrderDetails] = useState([]);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:4001/api/orders/${id}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setOrderDetails(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data. Please try again later.");
        }
    };

    return (
        <div className="container-fluid mt-3 mb-5 pt-4 pb-4 bg-pink">
            <div className="container bg-white p-lg-5 pl-md-3 p-sm-2 p-1">
                <h4 className="text-center text-green font-weight pb-1">Order Details</h4>
                <h3 className="text-center text-blue font-weight mb-4">Track Your Order</h3>
                <hr />
                <h4 className="text-center text-green font-weight pb-2 pt-3">Enter Your Order Id</h4>
                <div className="container d-flex justify-content-center pb-3">
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input
                            className="form-control mr-2"
                            name="id"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={id}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
                <hr />
                <div className="container">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Flavored Cake</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.length > 0 ? (
                                    orderDetails.map((user, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Contact}</td>
                                            <td>{user.Address}</td>
                                            <td>{user.Cake}</td>
                                            <td>{user.Quantity}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">Loading...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default OrderTracker;
