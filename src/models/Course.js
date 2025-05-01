const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        name: String,
        price: String,
        subTitle: String,
        releaseYear: Number
    },
)


module.exports = mongoose.model("Course", CourseSchema);