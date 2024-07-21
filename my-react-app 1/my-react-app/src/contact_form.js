// ContactForm.js

import React, { useState } from 'react';

function ContactForm() {
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');
    const[message,setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            contact : contact,
            city : city,
            message : message
        }

        const response = await fetch("http://localhost:4001/submit-contact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log('form submitted')
        } else {
            console.log('failed')
        }
    }
  return (
    <div className="container-fluid pt-5 pb-5 bg-pink">
      <h4 className="text-center text-green font-weight pb-1">Contact Us</h4>
      <h3 className="text-center text-blue font-weight mb-5">Feel Free to Contact Us</h3>
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 pl-4 pr-4">
          <img src="Images/cake-2.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName4">Name</label>
                <input type="text" name="Name" className="form-control" id="inputName4" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="text" name="Email" className="form-control" id="inputEmail4" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputContact4">Contact</label>
                <input type="number" name="Contact" className="form-control" id="inputContact4" placeholder="Enter Your Contact No." value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputCity4">City</label>
                <input type="text" name="City" className="form-control" id="inputCity4" placeholder="Enter Your City" value={city} onChange={(e) => setCity(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Message</label>
              <input type="text" name="Message" className="form-control" id="inputAddress" placeholder="1234 Main St" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-success">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
