"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.creators)
      this.hasMany(models.comments)
      this.hasMany(models.transactions)
      this.hasMany(models.follows)
      this.hasMany(models.thresholds)
    }
  }
  Users.init(
    {
      display_name: DataTypes.STRING,
      wallet: DataTypes.STRING,
      creator: DataTypes.BOOLEAN,
      photo_url: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
    }
  );
  return Users;
};
