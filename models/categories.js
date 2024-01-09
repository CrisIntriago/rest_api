const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    CategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Picture: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "Categories_CategoryName",
        using: "BTREE",
        fields: [
          { name: "CategoryName" },
        ]
      },
    ]
  });
};
