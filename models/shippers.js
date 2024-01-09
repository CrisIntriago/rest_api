const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shippers', {
    ShipperID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CompanyName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shippers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ShipperID" },
        ]
      },
    ]
  });
};
