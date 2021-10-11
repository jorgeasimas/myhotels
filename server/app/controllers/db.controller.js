const db = require("../models");
const Selector = db.list_table;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const input = {
    title: req.body.title,
    price: req.body.price,
    location: req.body.location,
    bed: req.body.bed,
    available: req.body.available ? req.body.available : false,
  };

  // Save Tutorial in the database
  Selector.create(input)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the items.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Selector.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving items.",
      });
    });
};

// Find a single item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Selector.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Selector.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Table was updated.",
        });
      } else {
        res.send({
          message: `Cannot update item with id=${id}. Maybe item was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating item with id=" + id,
      });
    });
};

// Delete a item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Selector.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Item was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete item with id=${id}. Maybe item was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete item with id=" + id,
      });
    });
};

// Delete all items from the database.
exports.deleteAll = (req, res) => {
  Selector.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} All items were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all items.",
      });
    });
};

// find all available items
exports.findAllPublished = (req, res) => {
  Selector.findAll({ where: { available: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving items.",
      });
    });
};
