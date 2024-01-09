const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    ProductID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'suppliers',
        key: 'SupplierID'
      }
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'CategoryID'
      }
    },
    QuantityPerUnit: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    UnitsInStock: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    UnitsOnOrder: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ReorderLevel: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    Discontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "Products_CategoriesProducts",
        using: "BTREE",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "Products_CategoryID",
        using: "BTREE",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "Products_ProductName",
        using: "BTREE",
        fields: [
          { name: "ProductName" },
        ]
      },
      {
        name: "Products_SupplierID",
        using: "BTREE",
        fields: [
          { name: "SupplierID" },
        ]
      },
      {
        name: "Products_SuppliersProducts",
        using: "BTREE",
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
