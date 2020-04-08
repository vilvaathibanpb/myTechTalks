import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Launch: {
      keyFields: ["mission_name"]
    }
  }
});
const link = new HttpLink({
  uri: "https://api.spacex.land/graphql/",
});

export const client = new ApolloClient({
  cache,
  link,
});
