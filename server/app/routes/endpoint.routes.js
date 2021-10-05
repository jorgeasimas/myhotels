module.exports = (app) => {
  const list_table = require("../controllers/db.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", list_table.create);

  // Retrieve all list_table
  router.get("/", list_table.findAll);

  // Retrieve all published list_table
  router.get("/published", list_table.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", list_table.findOne);

  // Update a Tutorial with id
  router.put("/:id", list_table.update);

  // Delete a Tutorial with id
  router.delete("/:id", list_table.delete);

  // Delete all list_table
  router.delete("/", list_table.deleteAll);

  app.use("/api/hotels", router);
};
