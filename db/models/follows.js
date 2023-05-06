"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Follows extends Model {
    static associate(models) {
      this.belongsTo(models.creators)
      this.belongsTo(models.users)
    }
  }
  Follows.init(
    {
      user_id: DataTypes.INTEGER,
      creator_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "follows",
      underscored: true,
    }
  );
  return Follows;
};
