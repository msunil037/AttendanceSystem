const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  roll: { type: String, required: true },
  branch: { type: String, required: true },
  sem: { type: String, required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model("Student", studentSchema);
