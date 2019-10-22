import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

const stitchedCache = new InMemoryCache();
const stitchedLink = 'http://localhost:4000/'
export const stitchedClient = new ApolloClient({
    cache: stitchedCache,
    uri: stitchedLink
})

export const ipHistory = {
    baseURL: "http://localhost:4002/",
    get: "getHistory",
    save: "saveIp"
}