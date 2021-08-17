'use strict';

const express = require('express');
const router = express.Router();

const {
    getAllClothess,
    createClothes,
    getClothes,
    updateClothes,
    deleteClothes,
} = require('../routes-implementations/clothes.routes-implementations.js');

router.get('/clothes', getAllClothess);
router.post('/clothes', createClothes);
router.get('/clothes/:id', getClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

module.exports = router;