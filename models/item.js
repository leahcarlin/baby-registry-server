"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      item.hasOne(models.sender, { foreignKey: "itemId" });
    }
  }
  item.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imgUrl: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      itemUrl: { type: DataTypes.STRING, allowNull: false },
      fulfilled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      details: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
