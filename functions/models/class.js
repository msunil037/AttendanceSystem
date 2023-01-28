const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  className: { type: String, required: true },
  sem: { type: String, required: true },
  branch: { type: String, required: true },
  teacher: { type: String, required: true },
  students: { type: Array, required: true },
});

module.exports = mongoose.model("Class", classSchema);
