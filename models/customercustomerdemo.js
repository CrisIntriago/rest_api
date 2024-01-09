const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customercustomerdemo', {
    CustomerID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'CustomerID'
      }
    },
    CustomerTypeID: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customerdemographics',
        key: 'CustomerTypeID'
      }
    }
  }, {
    sequelize,
    tableName: 'customercustomerdemo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
          { name: "CustomerTypeID" },
        ]
      },
      {
        name: "FK_CustomerCustomerDemo",
        using: "BTREE",
        fields: [
          { name: "CustomerTypeID" },
        ]
      },
      {
        name: "FK_CustomerCustomerDemo_Customers",
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
