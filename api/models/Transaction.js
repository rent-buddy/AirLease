'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'transaction',
    },
  );

  Transaction.associate = (models) => {
    models.Transaction.belongsTo(models.User, { foreignKey: 'BuyerId' });
  };

  return Transaction;
};
