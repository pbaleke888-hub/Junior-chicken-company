const express = require('express');
const router = express.Router();

// Mock Database
let transactions = [];

// GET all transactions
router.get('/transactions', (req, res) => {
    res.json(transactions);
});

// GET a transaction by ID
router.get('/transactions/:id', (req, res) => {
    const transaction = transactions.find(t => t.id === parseInt(req.params.id));
    if (!transaction) return res.status(404).send('Transaction not found');
    res.json(transaction);
});

// POST a new transaction
router.post('/transactions', (req, res) => {
    const transaction = {
        id: transactions.length + 1,
        ...req.body
    };
    transactions.push(transaction);
    res.status(201).json(transaction);
});

// PUT update a transaction
router.put('/transactions/:id', (req, res) => {
    let transaction = transactions.find(t => t.id === parseInt(req.params.id));
    if (!transaction) return res.status(404).send('Transaction not found');
    
    transaction = { ...transaction, ...req.body };
    transactions[transactions.indexOf(transaction)] = transaction;
    res.json(transaction);
});

// DELETE a transaction
router.delete('/transactions/:id', (req, res) => {
    const transactionIndex = transactions.findIndex(t => t.id === parseInt(req.params.id));
    if (transactionIndex === -1) return res.status(404).send('Transaction not found');
    
    transactions.splice(transactionIndex, 1);
    res.status(204).send();
});

module.exports = router;