'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {}

  CartItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'cartItem',
    },
  );

  CartItem.associate = (models) => {
    models.User.hasMany(models.CartItem, { foreignKey: 'userId' });
    models.CartItem.belongsTo(models.User, { foreignKey: 'userId' });
    models.Item.hasMany(models.CartItem, { foreignKey: 'itemId' });
    models.CartItem.belongsTo(models.Item, { foreignKey: 'itemId' });
  };

  return CartItem;
};
