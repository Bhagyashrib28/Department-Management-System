const mongoose = require("mongoose")

const course_schema = new mongoose.Schema({
    cname : String ,
    course_id : String ,
    credits : Number
});

module.exports = mongoose.model("Course" , course_schema)