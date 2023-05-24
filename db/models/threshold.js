"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Thresholds extends Model {
    static associate(models) {
      this.belongsTo(models.creators)
      this.belongsTo(models.users)
    }
  }
  Thresholds.init(
    {
      user_id: DataTypes.INTEGER,
      creator_id: DataTypes.INTEGER,
      total_contribution: DataTypes.FLOAT,
      status: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "thresholds",
      underscored: true,
    }
  );
  return Thresholds;
};