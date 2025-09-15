const mongoose = require("mongoose");

const student_schema = new mongoose.Schema({
    student_id : {
        type : String ,
        required : [true , "Student ID is required !"]
    } ,
    name : {
        type : String ,
        required : [true , "Name is required !"]
    } , 
    email : {
        type : String ,
        required : [true , "Email is required !"]
    } ,
    phone : {
        type : String , 
        required : [true , "Phone Number is required !"]
    } ,
    department : {
        type : String ,
        required : [true , "Department name is required !"]
    }
})

module.exports = mongoose.model("Student" , student_schema);