const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    party: [Party]!
  }

  type Party {
      id: ID!
      name: String
      candidate: String
      flag: String
      pic: String
  }
`;

module.exports = typeDefs;