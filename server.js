// server.js - WORKING VERSION
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Add this line to serve frontend files
app.use(express.static('.'));

// Test route - Check if server is working
app.get('/', (req, res) => {
    res.send('✅ TravelEase Backend is running!');
});

// Login endpoint
app.post('/api/login', (req, res) => {
    console.log('🔐 Login attempt:', req.body);
    
    // Simple authentication (always success for testing)
    res.json({
        success: true,
        message: 'Login successful from backend!',
        user: {
            id: 1,
            name: 'Test User',
            email: req.body.email
        }
    });
});

// Signup endpoint  
app.post('/api/signup', (req, res) => {
    console.log('📝 Signup attempt:', req.body);
    
    res.json({
        success: true,
        message: 'Account created successfully!',
        user: {
            id: 2,
            name: req.body.name,
            email: req.body.email
        }
    });
});

// Start server
const PORT = 5500;
app.listen(PORT, () => {
    console.log('==========================================');
    console.log('🚀 TRAVEL EASE BACKEND SERVER');
    console.log('==========================================');
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log('📞 Available endpoints:');
    console.log('   GET  /              - Check if server is running');
    console.log('   POST /api/login     - User login');
    console.log('   POST /api/signup    - User registration');
    console.log('==========================================');
    console.log('✅ Server started successfully!');
    console.log('⏳ Waiting for requests...');
});