'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {}

  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
        unique: true,
      },
      price: {
        type: DataTypes.DOUBLE,
        validate: {
          min: 1,
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 250],
          notEmpty: true,
        },
      },
      //might change it to something later
      picture: {
        type: DataTypes.BLOB,
      },
    },
    {
      sequelize,
      modelName: 'item',
    },
  );

  Item.associate = (models) => {
    models.Item.belongsTo(models.User);
  };

  return Item;
};
