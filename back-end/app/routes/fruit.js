const express = require("express");
const router = express.Router();
const fruit = require("../controller/fruit.controller");

// /api/fruit/:id: GET
// /api/fruit/category/:id: GET
// /api/store/published: GET

// Retrieve a single fruit with id
router.get("/:id", fruit.findOne);

// Retrieve all fruits by category
router.get("/category/:id", fruit.findAllByCategory);

// Retrieve all published store
/*router.get("/published", store.findAllPublished);*/

module.exports = router;
