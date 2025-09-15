const Student = require("./Model/Student");
exports.create_one = (model) => async(req , res , next) => {
    try {
        const new_student = await model.create(req.body);
console.log("Request body:", req.body);

        res
            .status(201)
            .json({
                status : "Success" ,
                message : "New Student Added !" ,
                data : new_student
            })
    } catch(err) {

        res
            .status(400)
            .json({
                status : "fail" ,
                message : `${err.name}`
            })
    }
};
exports.get_all = (model) => async(req , res , next) => {
    try {
        const student_data = await model.find();

        res
            .status(200)
            .json({
                status : "Success" ,
                data : student_data
            })
    } catch(err) {
        res
            .status(400)
            .json({
                status : "fail" ,
                message : err.message
            })
    }
}

exports.update_one = (model) => async(req , res , next) => {
  try {
    const updatedStudent = await model.findByIdAndUpdate(
      req.params.id,   
      req.body,        
      { new: true, runValidators: true } 
    );

    if (!updatedStudent) {
      return res.status(404).json({ status: "fail", message: "Student not found" });
    }

    res
        .status(200)
        .json({ 
            status: "success", 
            data: updatedStudent 
        });
  } catch (err) {
    res
        .status(400)
        .json({ 
            status: "fail", 
            message: err.message 
        });
  }
};

exports.delete_one = (model) => async(req , res , next) => {
  try {
    const deleted_Student = await model.findByIdAndDelete(req.params.id);

    if (!deleted_Student) {
      return res.status(404).json({ status: "fail", message: "Student not found" });
    }

    res
        .status(204)
        .json({ 
            status: "success", 
            data: null 
        });
  } catch (err) {
    res
        .status(400)
        .json({ 
            status: "fail", 
            message: err.message 
        });
  }
};

