"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Creators extends Model {
    static associate(models) {
      this.belongsTo(models.users)
      this.hasMany(models.posts)
      this.hasMany(models.transactions)
      this.hasMany(models.follows)
    }
  }
  Creators.init(
    {
      user_id: DataTypes.INTEGER,
      bio: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      twitter: DataTypes.STRING,
      substack: DataTypes.STRING,
      discord: DataTypes.STRING,
      youtube: DataTypes.STRING,
      website: DataTypes.STRING,
      tier_1: DataTypes.FLOAT,
      tier_2: DataTypes.FLOAT,
      tier_3: DataTypes.FLOAT,
      threshold: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "creators",
      underscored: true,
    }
  );
  return Creators;
};
