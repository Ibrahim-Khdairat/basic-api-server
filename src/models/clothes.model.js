'use strict';

// id column will be added by default with datatibe SERIAL
const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
    clothesName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clothesSize: {
        type: DataTypes.STRING,
    },
});

module.exports = Clothes;