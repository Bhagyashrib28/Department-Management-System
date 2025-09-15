const controller = require("./controllers.js")
const express = require("express")
const Student = require("./Model/Student.js")
const Course = require("./Model/Course.js")
const Faculty = require("./Model/Faculty.js")
const router = express.Router();
router
    .route("/students")
    .post(controller.create_one(Student))
    .get(controller.get_all(Student))

router 
    .route("/students/:id")
    .patch(controller.update_one(Student))   
    .delete(controller.delete_one(Student)) 

router
    .route("/course")
    .post(controller.create_one(Course))
    .get(controller.get_all(Course))

router
    .route("/course/:id")
    .patch(controller.update_one(Course))
    .delete(controller.delete_one(Course))    

router
    .route("/faculty")
    .post(controller.create_one(Faculty))
    .get(controller.get_all(Faculty))

router
    .route("/faculty/:id")
    .patch(controller.update_one(Faculty))
    .delete(controller.delete_one(Faculty))    

module.exports = router;    