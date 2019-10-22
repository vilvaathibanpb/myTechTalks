const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const RandomUserAPI = require('./data-sources/randomUser');
const LoveCalcAPI = require('./data-sources/loveCalculator');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        RandomUserAPI: new RandomUserAPI(),
        LoveCalcAPI : new LoveCalcAPI()
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});