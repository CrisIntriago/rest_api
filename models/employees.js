const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    EmployeeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TitleOfCourtesy: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HireDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Region: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    HomePhone: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    Extension: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Photo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportsTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    PhotoPath: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EmployeeID" },
        ]
      },
      {
        name: "Employees_LastName",
        using: "BTREE",
        fields: [
          { name: "LastName" },
        ]
      },
      {
        name: "Employees_PostalCode",
        using: "BTREE",
        fields: [
          { name: "PostalCode" },
        ]
      },
      {
        name: "FK_Employees_Employees",
        using: "BTREE",
        fields: [
          { name: "ReportsTo" },
        ]
      },
    ]
  });
};
