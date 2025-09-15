const mongoose = require("mongoose")

const faculty_schema = new mongoose.Schema({
    fname : String ,
    faculty_id :  String ,
    dept : String
});

module.exports = mongoose.model("Faculty" , faculty_schema)