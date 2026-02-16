const express = require('express');
const router = express.Router();

// Sample data structure for inventory items
let inventory = [];

// CREATE: Add a new inventory item
router.post('/', (req, res) => {
    const newItem = req.body;
    inventory.push(newItem);
    res.status(201).json(newItem);
});

// READ: Get all inventory items
router.get('/', (req, res) => {
    res.json(inventory);
});

// READ: Get an inventory item by ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const item = inventory.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// UPDATE: Update an inventory item by ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = inventory.findIndex(i => i.id === itemId);
    if (index !== -1) {
        inventory[index] = req.body;
        res.json(inventory[index]);
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE: Remove an inventory item by ID
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = inventory.findIndex(i => i.id === itemId);
    if (index !== -1) {
        inventory.splice(index, 1);
        res.status(204).send();  // No content
    } else {
        res.status(404).send('Item not found');
    }
});

module.exports = router;
