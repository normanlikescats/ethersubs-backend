"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      this.belongsTo(models.users)
      this.belongsTo(models.posts)
    }
  }
  Comments.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "comments",
      underscored: true,
    }
  );
  return Comments;
};
