const connectDB = require('./db');

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
            console.error(e);

        }

        return newCourse;
    }
}