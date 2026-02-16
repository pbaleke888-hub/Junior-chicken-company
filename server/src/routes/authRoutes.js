'use strict';

const express = require('express');
const router = express.Router();

// Mock user database
const users = [];

// Register endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).send('User already exists');
    }
    users.push({ username, password });
    return res.status(201).send('User registered');
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    return res.status(200).send('Login successful');
});

module.exports = router;