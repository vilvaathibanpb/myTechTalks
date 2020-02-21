/* eslint-disable */
const { ApolloServer } = require("apollo-server");
const { gql } = require("apollo-server");

const typeDefs = gql`
  type SalaryDetails {
    education: String
    experience: String
    role: String
    location: String
    salary: String
  }
  type Query {
    salaryDetails: SalaryDetails
  }
`;
const server = new ApolloServer({
  typeDefs,
  mocks: {
    SalaryDetails: () => ({
      education: "📚 Internet-Taught",
      experience: "⌛ 5 years",
      role: "💻 Software Engg",
      location: "🌎 Berlin",
      salary: "💰 Not enough 😋"
    })
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
