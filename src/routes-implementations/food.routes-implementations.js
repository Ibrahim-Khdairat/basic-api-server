const { Food } = require('../models/index');


async function createFood(req, res) {
    let foodInfo = req.body;
    let food = await Food.create(foodInfo);
    res.status(201).json(food);
}

async function getFood(req, res) {
    const id = parseInt(req.params.id);
    let food = await Food.findOne({ where: { id: id } });
    res.status(200).json(food);
}

async function getAllFoods(req, res) {
    let allFoods = await Food.findAll();
    res.status(200).json(allFoods);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    let foodInfo = req.body;

    let food = await Food.findOne({ where: { id } });
    let updateFood = await food.update(foodInfo);
    res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id } });
    res.status(204).json(deleteFood);
}

module.exports = {
    getAllFoods,
    createFood,
    getFood,
    updateFood,
    deleteFood,
}