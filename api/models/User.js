'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullname() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init(
    {
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: { type: DataTypes.STRING },
      password: {
        type: DataTypes.STRING,
        validate: {
          isLongEnough: function (val) {
            if (val.length < 7) {
              throw new Error('Please choose a longer password');
            }
          },
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

  User.beforeSave((user, options) => {
    if (password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};
