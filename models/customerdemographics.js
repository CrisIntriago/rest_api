const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerdemographics', {
    CustomerTypeID: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    CustomerDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customerdemographics',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerTypeID" },
        ]
      },
    ]
  });
};
