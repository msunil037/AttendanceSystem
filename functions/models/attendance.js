const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
  attendanceSheet: { type: Array, required: true },
  className: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
