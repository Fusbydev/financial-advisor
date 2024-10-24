const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing JSON data

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'bpi_datawave', // Replace with your database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Route to register a user
app.post('/api/register', (req, res) => {
    const { fullName, email, password } = req.body;
    
    // SQL query to insert user data
    const sql = `INSERT INTO user (full_name, email, password) VALUES (?, ?, ?)`;

    db.query(sql, [fullName, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error registering user', error: err });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
