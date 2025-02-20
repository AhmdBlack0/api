const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

const getWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ msg: "id is wrong" });
  }
  const workout = await workoutModel.findById(id);
  if (!workout) {
    res.status(404).json({ msg: "no workout" });
  }
  res.status(200).json(workout);
};

const createWorkout = async (req, res) => {
  const { title, reps } = req.body;
  try {
    const workout = await workoutModel.create({ title, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ msg: "id is wrong" });
  }
  const workout = await workoutModel.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    res.status(400).json({ msg: "no workout" });
  }

  res.status(200).json(workout);
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ msg: "id is wrong" });
  }
  const workout = await workoutModel.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(400).json({ msg: "no workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
};
