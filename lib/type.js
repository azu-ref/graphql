const connectDB = require('./db');
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');

module.exports = {
    Course: {
        people: async ({ people }) => {
            let db = connectDB();
            let peopleData;
            let ids

            try {
                db = await connectDB();
                ids = people ? people.map(id => ObjectID(id)) : [] ;

                peopleData = ids.length > 0 
                    ? await db.collection('students').find(
                        { _id: { $in: ids }}
                    ).toArray()
                    : [];

            } catch (error) {
                errorHandler(error)
            }

            return peopleData
        }
    },

    Person: {
        __resolveType: (person , context, info) => {
            if(person.phone){
                return "Monitor"
            }

            return "Student"
        }
    }
}