const express = require("express");
const Teacher = require("../models/teacher");
const router = express.Router();

router.post(
  "",
  (req, res, next) => {
    const teacher = new Teacher({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    teacher.save().then(() => {
      res.status(201).json({
        message: "Teacher added successfully",
      });
    }).catch(error => {
      res.status(500).json({ message: "Error!" });
    });
  }
);

router.put(
  "/:id",
  (req, res, next) => {
    const teacher = new Teacher({
      _id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    Teacher.updateOne({ _id: req.params.id }, teacher).then(result => {
      res.status(200).json({ message: "Update successful!" });
    }).catch(error => {
      res.status(500).json({ message: "Error!" });
    });
  }
);

router.get("", (req, res, next) => {
  const teacherQuery = Teacher.find();
  let fetchedTeachers;
  teacherQuery
    .then(documents => {
    fetchedTeachers = documents;
      return Teacher.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Data fetched successfully!",
        teachers: fetchedTeachers
      });
    }).catch(error => {
      res.status(500).json({ message: "Error!" });
    });
});

router.get("/:id", (req, res, next) => {
  Teacher.findById(req.params.id).then(teacher => {
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ message: "Data not found!" });
    }
  }).catch(error => {
    res.status(500).json({ message: "Error!" });
  });
});

router.delete("/:id", (req, res, next) => {
  Teacher.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Data deleted successfully!" });
  }).catch(error => {
    res.status(500).json({ message: "Error!" });
  });
});

module.exports = router;
