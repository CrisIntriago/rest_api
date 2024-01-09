const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    OrderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      references: {
        model: 'customers',
        key: 'CustomerID'
      }
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequiredDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShippedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipVia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shippers',
        key: 'ShipperID'
      }
    },
    Freight: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    ShipName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ShipAddress: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ShipCity: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ShipRegion: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ShipPostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ShipCountry: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "Orders_CustomerID",
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
      {
        name: "Orders_CustomersOrders",
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
      {
        name: "Orders_EmployeeID",
        using: "BTREE",
        fields: [
          { name: "EmployeeID" },
        ]
      },
      {
        name: "Orders_EmployeesOrders",
        using: "BTREE",
        fields: [
          { name: "EmployeeID" },
        ]
      },
      {
        name: "Orders_OrderDate",
        using: "BTREE",
        fields: [
          { name: "OrderDate" },
        ]
      },
      {
        name: "Orders_ShippedDate",
        using: "BTREE",
        fields: [
          { name: "ShippedDate" },
        ]
      },
      {
        name: "Orders_ShippersOrders",
        using: "BTREE",
        fields: [
          { name: "ShipVia" },
        ]
      },
      {
        name: "Orders_ShipPostalCode",
        using: "BTREE",
        fields: [
          { name: "ShipPostalCode" },
        ]
      },
      {
        name: "FK_Orders_Customers",
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
