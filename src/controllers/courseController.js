const Course = require("../models/Course");
const course = require("../models/Course");


// get all courses:
exports.getCourse = async (request, reply) => {
    try {
        const courses = await Course.find();
        return courses;
    } catch (error) {
        console.log("Error fetching the courses:", error)
    }
}

// get a single course:

exports.getSingleCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const getACourse = await Course.findById(courseId);
        return getACourse;

    } catch (error) {
        console.log("Error fetching a single course", error)
    }
}


// add a new course:

exports.addCourse = async (req, reply) => {
    try {

        const course = new Course(req.body);
        return course.save()

    } catch (error) {
        console.log("Failed to add a course:", error)
    }
}

// update an existing course 

exports.updateCourse = async (req, reply) => {

    try {

        const courseId = req.params.id;
        const course = req.body;
        const { ...updatedCourse } = course;
        const update = await Course.findByIdAndUpdate(
            courseId,
            updatedCourse,
            { new: true }
        );

        return update;
    } catch (error) {
        console.log("Failed to update course:", error)
    }
}

// delete an existing course

exports.deleteCourse = async (req, reply) => {
    try {
        const courseId = req.params.id;

        const deletedCourse = await Course.findByIdAndDelete(courseId);
        return deletedCourse;
    } catch (error) {
        console.log("failed to delete the course:", error)
    }
}