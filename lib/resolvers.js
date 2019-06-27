const connectDb = require('./db');
const { ObjectID } = require('mongodb');

const queries = require('./queries');
const mutations = require('./mutations')

module.exports = {
    Query: queries,
    Mutation: mutations
}