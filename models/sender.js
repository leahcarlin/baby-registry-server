"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sender.belongsTo(models.item, { foreignKey: "itemId" });
    }
  }
  sender.init(
    {
      giftMessage: DataTypes.STRING,
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "sender",
    }
  );
  return sender;
};
