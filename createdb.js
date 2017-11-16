var db = require("./models");

db.listitem.create({
  name: "Pick up dog messes"
}).then(function(result) {
  console.log(result);
});
