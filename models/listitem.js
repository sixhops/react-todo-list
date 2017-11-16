'use strict';
module.exports = (sequelize, DataTypes) => {
  var listitem = sequelize.define('listitem', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return listitem;
};