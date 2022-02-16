// IMPORTING MODULES
const asyncHandler = require("express-async-handler");
const Show = require("../models/showModel");

// READ ALL SHOWS - GET
const getShows = asyncHandler(async (req, res) => {
  const shows = await Show.find();
  res.status(200).json(shows);
});

// CREATE SHOW - POST
const addShow = asyncHandler(async (req, res) => {
  if (!req.body.showType) {
    res.status(400);
    throw new Error("Please complete all fields.");
  }

  const newShow = await Show.create({
    showType: req.body.showType
  });
  res.status(200).json(newShow);
});

// UPDATE A SHOW - PUT
const editShow = asyncHandler(async (req, res) => {
  const show = await Show.findById(req.params.id);

  if (!show) {
    res.status(400);
    throw new Error("Show not found.");
  }

  const updated = await Show.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updated);
});

// DELETE A SHOW - DELETE
const deleteShow = asyncHandler(async (req, res) => {
  const show = await Show.findById(req.params.id);

  if (!show) {
    res.status(400);
    throw new Error("Show not found.");
  }

  await show.remove();
  res.status(200).json({ id: req.params.id });
});

// GET A SINLGE SHOW - GET
const getShow = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `GET - One Show ${req.params.id}` });
});

// EXPORTING THE CONTROLLERS
module.exports = {
  getShows,
  addShow,
  editShow,
  deleteShow,
  getShow
};
