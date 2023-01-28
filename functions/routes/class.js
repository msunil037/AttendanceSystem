const express = require("express");
const Class = require("../models/class");
const Attendance = require("../models/attendance");
const router = express.Router();


router.get("/attendance/:date/:className", (req, res, next) => {
  Attendance.find({date: req.params.date, className: req.params.className})
    .then((attendanceRes) => {
      if (attendanceRes) {
        res.status(200).json(attendanceRes);
      } else {
        res.status(404).json({ message: "Data not found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});
router.post("/attendance", (req, res, next) => {
  const attendance = new Attendance({
    attendanceSheet: req.body.attendanceSheet,
    className: req.body.className,
    date: req.body.date
  });
  attendance
    .save()
    .then(() => {
      res.status(201).json({
        message: "Attendance taken successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});

router.post("", (req, res, next) => {
  const classObj = new Class({
    className: req.body.className,
    sem: req.body.sem,
    branch: req.body.branch,
    teacher: req.body.teacher,
    students: req.body.students,
  });
  classObj
    .save()
    .then(() => {
      res.status(201).json({
        message: "Class added successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});

router.put("/:id", (req, res, next) => {
  try {
    const classObj = new Class({
      _id: req.body.id,
      className: req.body.className,
      sem: req.body.sem,
      branch: req.body.branch,
      teacher: req.body.teacher,
      students: req.body.students,
    });
    Class.updateOne({ _id: req.params.id }, classObj)
      .then((result) => {
        res.status(200).json({ message: "Update successful!" });
      })
      .catch((error) => {
        res.status(500).json({ message: "Error in saving the data!" });
      });
  } catch (error) {
    res.status(500).json({ message: "Error in saving the data!" });
  }
});

router.get("", (req, res, next) => {
  const classQuery = Class.find();
  let fetchedClasses;
  classQuery
    .then((documents) => {
      fetchedClasses = documents;
      return Class.count();
    })
    .then((count) => {
      res.status(200).json({
        message: "Data fetched successfully!",
        classes: fetchedClasses,
      });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});

router.get("/:id", (req, res, next) => {
  Class.findById(req.params.id)
    .then((classRes) => {
      if (classRes) {
        res.status(200).json(classRes);
      } else {
        res.status(404).json({ message: "Data not found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});

router.delete("/:id", (req, res, next) => {
  Class.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: "Data deleted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});

module.exports = router;
