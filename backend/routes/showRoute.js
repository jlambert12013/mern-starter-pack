// Imports
const express = require("express");
const router = express.Router();
const {
  getShows,
  getShow,
  addShow,
  editShow,
  deleteShow
} = require("../controllers/showController");

// Show Routes
router
  .route("/")
  .get(getShows)
  .post(addShow);
router
  .route("/:id")
  .get(getShow)
  .put(editShow)
  .delete(deleteShow);

// Exporting Router
module.exports = router;
