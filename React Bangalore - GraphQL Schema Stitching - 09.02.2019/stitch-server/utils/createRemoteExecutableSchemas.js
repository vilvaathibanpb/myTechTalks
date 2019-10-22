const graphlApis = require("../config");
const linkTypeDefs = require("../typeDefs/linkTypeDefs");
const IpSchema = require("../schemas/IpSchema");
const { HttpLink } = require("apollo-link-http");
const {
  makeRemoteExecutableSchema,
  introspectSchema
} = require("graphql-tools");
const fetch = require("node-fetch");

const createRemoteExecutableSchemas = async () => {
  let schemas = [];
  // iterate over all the the GraphQL APIs
  for (let i = 0; i < graphlApis.length; i++) {
    // Create Apollo link with URI and headers of the GraphQL API
    const link = new HttpLink({
      uri: graphlApis[i].uri,
      fetch
    });
    // Introspect schema
    const remoteSchema = await introspectSchema(link);
    // Make remote executable schema
    const remoteExecutableSchema = makeRemoteExecutableSchema({
      schema: remoteSchema,
      link
    });
    schemas.push(remoteExecutableSchema);
  }
  schemas.push(IpSchema);
  schemas.push(linkTypeDefs);
  return schemas;
};

module.exports = createRemoteExecutableSchemas;