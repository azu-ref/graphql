const { MongoClient } = require('mongodb');
require('dotenv').config();
const {
    DB_USER: USER,
    DB_PASSWORD: PASSWORD,
    DB_HOST: HOST,
    DB_PORT: PORT,
    DB_NAME: NAME
} = process.env

const mongoURL = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}?ssl=true&authSource=admin&retryWrites=true`; 

let connection;

async function connectDB(){
    if (connection) return connection;

    let client;
    try{
        client = await MongoClient.connect(mongoURL, {
            useNewUrlParser: true
        });
        connection = client.db(NAME)
        console.log('Connection is ready')

    }catch(e){
        console.error({
            error: 'Could not connect to db',
            URL: mongoURL,
            e
        });
        process.exit(1);
    }

    return connection;

}

module.exports = connectDB;
