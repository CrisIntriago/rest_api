const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderdetails', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'OrderID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'ProductID'
      }
    },
    UnitPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    Quantity: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    Discount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'orderdetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderID" },
          { name: "ProductID" },
        ]
      },
      {
        name: "OrderDetails_OrderID",
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "OrderDetails_OrdersOrder_Details",
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "OrderDetails_ProductID",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "OrderDetails_ProductsOrder_Details",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
