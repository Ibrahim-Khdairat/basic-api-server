'use strict';

const express = require('express');
const router = express.Router();

const {
    getAllFoods,
    createFood,
    getFood,
    updateFood,
    deleteFood,
} = require('../routes-implementations/food.routes-implementations');

router.get('/food', getAllFoods);
router.post('/food', createFood);
router.get('/food/:id', getFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports = router;