const { Clothes } = require('../models/index');


async function createClothes(req, res) {
    let clothesInfo = req.body;
    let clothes = await Clothes.create(clothesInfo);
    res.status(201).json(clothes);
}

async function getClothes(req, res) {
    const id = parseInt(req.params.id);
    let clothes = await Clothes.findOne({ where: { id: id } });
    res.status(200).json(clothes);
}

async function getAllClothess(req, res) {
    let allClothess = await Clothes.findAll();
    res.status(200).json(allClothess);
}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let clothesInfo = req.body;

    let clothes = await Clothes.findOne({ where: { id } });
    let updateClothes = await clothes.update(clothesInfo);
    res.status(200).json(updateClothes);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id } });
    res.status(204).json(deleteClothes);
}

module.exports = {
    getAllClothess,
    createClothes,
    getClothes,
    updateClothes,
    deleteClothes,
}