const express = require("express");
const router = express.Router();
const category = require("../controller/category.controller");

// /api/category: GET
// /api/category/:id: GET

// Retrieve all category
router.get("/", category.findAll);

// Retrieve a single category with id
router.get("/:id", category.findOne);

module.exports = router;
