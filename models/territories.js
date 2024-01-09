const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('territories', {
    TerritoryID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TerritoryDescription: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'region',
        key: 'RegionID'
      }
    }
  }, {
    sequelize,
    tableName: 'territories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TerritoryID" },
        ]
      },
      {
        name: "FK_Territories_Region",
        using: "BTREE",
        fields: [
          { name: "RegionID" },
        ]
      },
    ]
  });
};
