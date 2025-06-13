const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');
const https = require('https');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, './.env') });

const app = express();

// CORS configuration
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'http://69.62.83.14:5173',
        'https://momgenerator07.onrender.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

// SSL/TLS configuration
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/69.62.83.14/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/69.62.83.14/fullchain.pem')
};

// Create HTTPS server
https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
    console.log(`HTTPS Server is running on port ${PORT}`);
});
