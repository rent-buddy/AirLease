const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 250],
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'user',
    },
  );

  User.associate = (models) => {
    models.User.hasMany(models.Item);
    models.User.hasMany(models.Transaction);
  };

  return User;
};
