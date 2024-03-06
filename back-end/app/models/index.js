const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.category = require("./category.model.js")(mongoose);
db.fruit = require("./fruit.model.js")(mongoose);

module.exports = db;
