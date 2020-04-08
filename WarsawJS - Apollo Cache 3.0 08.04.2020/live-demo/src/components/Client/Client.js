// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

export const cache = new InMemoryCache({});
const link = new HttpLink({
  uri: "https://api.spacex.land/graphql/",
});

export const client = new ApolloClient({
  cache,
  link,
});
