const express = require("express");
const Student = require("../models/student");
const router = express.Router();

router.post(
  "",
  (req, res, next) => {
    const student = new Student({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      roll: req.body.roll,
      branch: req.body.branch,
      sem: req.body.sem
    });
    student.save().then(() => {
      res.status(201).json({
        message: "Student added successfully",
      });
    }).catch(error => {
        res.status(500).json({ message: "Error!" });
      });
  }
);

router.put(
  "/:id",
  (req, res, next) => {
    const student = new Student({
      _id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      roll: req.body.roll,
      branch: req.body.branch,
      sem: req.body.sem
    });
    Student.updateOne({ _id: req.params.id }, student).then(result => {
      res.status(200).json({ message: "Update successful!" });
    }).catch(error => {
        res.status(500).json({ message: "Error!" });
      });
  }
);

router.get("", (req, res, next) => {
  const studentQuery = Student.find();
  let fetchedStudents;
  studentQuery
    .then(documents => {
        fetchedStudents = documents;
      return Student.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Data fetched successfully!",
        students: fetchedStudents
      });
    }).catch(error => {
        res.status(500).json({ message: "Error!" });
      });
});

router.get("/:id", (req, res, next) => {
  Student.findById(req.params.id).then(student => {
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: "Data not found!" });
    }
  }).catch(error => {
    res.status(500).json({ message: "Error!" });
  });
});

router.delete("/:id", (req, res, next) => {
  Student.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Data deleted successfully!" });
  }).catch(error => {
    res.status(500).json({ message: "Error!" });
  });
});

module.exports = router;
