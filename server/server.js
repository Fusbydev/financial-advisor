const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

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
app.post('/api/register', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Check if the email already exists in the database
        const checkEmailSql = `SELECT * FROM user WHERE email = ?`;
        db.query(checkEmailSql, [email], async (err, results) => {
            if (err) {
                console.error('Error checking email:', err);
                return res.status(500).json({ message: 'Error checking email', error: err });
            }

            if (results.length > 0) {
                // Email already exists
                return res.status(400).json({ message: 'Email already exists' });
            }

            // Hash the password before storing it
            const hashedPassword = await bcrypt.hash(password, 10);

            // SQL query to insert user data
            const sql = `INSERT INTO user (full_name, email, password) VALUES (?, ?, ?)`;

            db.query(sql, [fullName, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Error registering user:', err);
                    return res.status(500).json({ message: 'Error registering user', error: err });
                }
                res.status(201).json({ message: 'User registered successfully' });
            });
        });
    } catch (hashError) {
        console.error('Error hashing password:', hashError);
        return res.status(500).json({ message: 'Error processing request', error: hashError });
    }
});



app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // SQL query to find user by email
    const sql = `SELECT * FROM user WHERE email = ?`;
    db.query(sql, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        
        // Compare the password with the hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', user });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
