const { gql } = require('apollo-server');

const typeDefs = gql`
type Match {
    name: String
    age: String
    photo: String
    percentage: String
    result: String
}

type Query {
    match(gender: String, name: String): Match
}
`

module.exports = typeDefs;