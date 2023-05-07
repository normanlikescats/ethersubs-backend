"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      this.belongsTo(models.creators)
      this.belongsTo(models.users)
    }
  }
  Transactions.init(
    {
      user_id: DataTypes.INTEGER,
      creator_id: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
      asset: DataTypes.STRING,
      transaction_hash: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "transactions",
      underscored: true,
    }
  );
  return Transactions;
};