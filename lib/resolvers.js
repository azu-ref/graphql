const connectDb = require('./db');
const { ObjectID } = require('mongodb');

module.exports = {
    Query: {
        getCourses: async () => {
            let db, courses = []; 
            try{
                db = await connectDb();
                courses = db.collection('courses').find().toArray();

            }catch(e){
                console.error(e);
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
                console.log(e);
            }

            return course;
        }

    }
}