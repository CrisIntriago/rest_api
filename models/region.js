const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region', {
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RegionDescription: {
      type: DataTypes.CHAR(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'region',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RegionID" },
        ]
      },
    ]
  });
};
