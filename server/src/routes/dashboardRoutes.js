'use strict';

const express = require('express');
const router = express.Router();

// Statistics endpoint
router.get('/statistics', (req, res) => {
    // Logic to get statistics
    res.json({ message: 'Statistics data'});
});

// Summary endpoint
router.get('/summary', (req, res) => {
    // Logic to get summary
    res.json({ message: 'Summary data'});
});

module.exports = router;