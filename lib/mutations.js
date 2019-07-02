const connectDB = require('./db');
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');

module.exports = {
    createCourse: async (root, args) => {
        let { input } = args;
        const defaults = {
            teacher: '',
            topic: ''
        }

        const newCourse = { ...defaults, ...input};
        let db;
        let course;

        try{
            db = await connectDB();
            course = await db.collection('courses').insertOne(newCourse);
            newCourse._id = course.insertedId;

        }catch(e){
            errorHandler(e);

        }

        return newCourse;
    },

    createPerson: async (root, args) => {
        let { input } = args;
        let db;
        let student;

        try{
            db = await connectDB();
            student = await db.collection('students').insertOne(input);
            input._id = student.insertedId;

        }catch(e){
            errorHandler(e);

        }

        return input;
    },

    editCourse: async (root, args) => {
        let { input, _id } = args;
        let db;
        let course;

        try {
            db = await connectDB();
            await db.collection('courses').updateOne(
                { _id: ObjectID( _id ) },
                {$set: input});
            course = await db.collection('courses').findOne({ _id: ObjectID(_id)});
            

        } catch (error) {
            errorHandler(error)

        }

        return course;

    },

    editPerson: async (root, args) => {
        let { input, _id } = args;
        let db;
        let student;

        try {
            db = await connectDB();
            await db.collection('students').updateOne(
                { _id: ObjectID( _id ) },
                { $set: input });
            student = await db.collection('students').findOne({ _id: ObjectID(_id)});
            

        } catch (error) {
            errorHandler(error)

        }

        return student;

    },
    
    addPerson: async (root, args) => {
        let { courseID, personID } = args;

        let db
        let student
        let course

        try {
            db = await connectDB();
            course = await db.collection('courses').findOne({ _id: ObjectID(courseID)});
            student = await db.collection('students').findOne({ _id: ObjectID(personID) });

            if (!course || !student) throw new Error('No se ha encontrado el curso o la persona');

            await db.collection('courses').updateOne(
                { _id: ObjectID(courseID) },
                { $addToSet: { people: ObjectID(personID) } }
                
            );

        } catch (error) {
            errorHandler(err)
        }

        return course;
    }
}