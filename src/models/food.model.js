'use strict';

// id column will be added by default with datatibe SERIAL
const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodSize: {
        type: DataTypes.STRING,
    },
});

module.exports = Food;