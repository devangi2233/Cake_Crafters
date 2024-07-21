const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
app.use(cors()); 
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');
const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    port:'3306',
    password: '', 
    database: 'bakery' 
});

app.use(express.json());


app.use(express.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'osmnkc2022@gmail.com',
        pass: 'npavansbvpxsdlbw'
    }
});


app.post('/submit-signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const insertQuery = `INSERT INTO register VALUES (?, ?, ?)`;

    try {
        await pool.execute(insertQuery, [email, password, confirmPassword]);

        const mailOptions = {
            from: '"Info" osmnkc2022@gmail.com',
            to: email,
            subject: 'Thanks for registering with your site name',
            html: '<b>Registration Successfully</b>'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending confirmation email');
            } else {
                console.log('Email sent:', info.response);
                res.status(200).send('User registered successfully');
            }
        });
    } catch (error) {
        console.error('Failed to insert user:', error);
        res.status(500).send('Failed to register user');
    }
});




app.post('/submit-login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const selectQuery = `SELECT * FROM register WHERE email = ? AND password = ?`; // Add password check
    try {
        const [rows, fields] = await pool.execute(selectQuery, [email, password]);

        if (rows.length === 0) {
            return res.status(404).send('User not found or incorrect password');
        }

        res.send('Login successful');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Failed to login');
    }
});

app.post('/submit-contact', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const city = req.body.city;
    const message = req.body.message;
    const insertQuery = `INSERT INTO contact(Name,Email,Contact,City,Message) VALUES (?, ?, ?, ?, ?)`;
    
    try {
        const [rows, fields] = await pool.execute(insertQuery, [name,email,contact,city,message]);
        res.send('User registered successfully');
    } catch (error) {
        console.error('Failed to insert user:', error);
        res.status(500).send('Failed to register user');
    }
});

app.post('/submit-placeorder', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const city = req.body.city;
    const address = req.body.address;
    const cake = req.body.cake;
    const tag = req.body.tag;
    const quantity = req.body.quantity;
    const text = req.body.text;
    const topup = req.body.topup;
    const insertQuery = `INSERT INTO payment(Name,Email,Contact,City,Address,Cake,Tag,Quantity,Text,Topup) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    try {
        const [rows, fields] = await pool.execute(insertQuery, [name,email,contact,city,address,cake,tag,quantity,text,topup]);
        res.send('User registered successfully');
    } catch (error) {
        console.error('Failed to insert user:', error);
        res.status(500).send('Failed to register user');
    }
});


app.get('/api/orders/:id', async (req, res) => {
  try {
      const [rows] = await pool.query('SELECT * FROM payment WHERE id = ?', [req.params.id]);
      res.send(rows);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
  }
});

  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


