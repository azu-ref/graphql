const { graphql, buildSchema } = require('graphql')

//Definiendo esquema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

//Ejecutarel query hello
graphql(schema, '{ hello }').then( data => {
    console.log(data)
})