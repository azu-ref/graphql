const connectDb = require('./db');
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');

module.exports = {
    getCourses: async () => {
        let db, courses = []; 
        try{
            db = await connectDb();
            courses = db.collection('courses').find().toArray();

        }catch(e){
            errorHandler(e);
        }

        return courses;
    },

    getCourse: async (root, args) => {
        let db;
        let course;
        try{
            db = await connectDb();
            course = db.collection('courses').findOne({ _id: ObjectID(args._id) });

        }catch(e){
            errorHandler(e);
        }

        return course;
    },

    getStudents: async () => {
        let db, Students = []; 
        try{
            db = await connectDb();
            Students = db.collection('students').find().toArray();

        }catch(e){
            errorHandler(e);
        }

        return Students;
    },

    getStudent: async (root, args) => {
        let db;
        let student;
        try{
            db = await connectDb();
            student = db.collection('students').findOne({ _id: ObjectID(args._id) });

        }catch(e){
            errorHandler(e);
        }

        return student;
    }

}