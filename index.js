const { graphql, buildSchema } = require('graphql')

//Definiendo esquema
const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`)

const resolvers = {
    hello: () => 'Hola Mundo',
    saludo: () => 'Hola a todos'
}

//Ejecutarel query hello
graphql(schema, '{ saludo }', resolvers).then( data => {
    console.log(data)
})