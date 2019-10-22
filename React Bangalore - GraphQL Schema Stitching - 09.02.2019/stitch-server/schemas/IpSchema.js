const ipDefs = require("../typeDefs/ipDefs");
const IpResolver = require("../resolvers");
const { makeExecutableSchema } = require("graphql-tools");


const IpSchema = makeExecutableSchema({
  typeDefs: ipDefs,
  resolvers: IpResolver
});

module.exports = IpSchema;
