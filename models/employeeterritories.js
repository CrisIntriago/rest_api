const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeterritories', {
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    TerritoryID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'territories',
        key: 'TerritoryID'
      }
    }
  }, {
    sequelize,
    tableName: 'employeeterritories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EmployeeID" },
          { name: "TerritoryID" },
        ]
      },
      {
        name: "FK_EmployeeTerritories_Territories",
        using: "BTREE",
        fields: [
          { name: "TerritoryID" },
        ]
      },
    ]
  });
};
