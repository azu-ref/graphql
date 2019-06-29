const connectDb = require('./db');
const { ObjectID } = require('mongodb');

const queries = require('./queries');
const mutations = require('./mutations');
const types = require('./type');

module.exports = {
    Query: queries,
    Mutation: mutations,
    ...types
}