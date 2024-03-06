const db = require("../models");
const Fruit = db.fruit;

// Find a single fruit with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Fruit.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found fruit with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving fruit with id=" + id });
    });
};

// Find all fruits by category
exports.findAllByCategory = (req, res) => {
  const id = req.params.id;

  Fruit.find({ categoryId: id }).select(["name", "images", "uom", "price"])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving fruits.",
      });
    });
};
