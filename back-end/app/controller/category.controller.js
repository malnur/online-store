const db = require("../models");
const Category = db.category;

// Retrieve all categories from the database.
exports.findAll = (req, res) => {
  Category.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories.",
      });
    });
};

// Find a single category with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found category with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving category with id=" + id });
    });
};
