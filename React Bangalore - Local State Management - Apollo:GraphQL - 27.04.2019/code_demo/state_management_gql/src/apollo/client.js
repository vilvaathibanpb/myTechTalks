import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import { GET_VOTES } from './queries';



const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        vote: [Vote]
    }

    type Vote {
        count: String
        party: String
    }
    extend type Mutation {
        addVote(name: String): [Vote]
      }
`


const resolvers = {
	Mutation: {
		addVote: (_, { name }, { cache }) => {
			const { vote } = cache.readQuery({ query: GET_VOTES })
			const newVote = vote.map((e) => {
				if (e.party === name) {
					e.count = e.count + 1
				}
				return e
			})
			cache.writeQuery({ query: GET_VOTES, data: { vote: newVote } })
			return newVote
		}
	}
};


const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:4000/'
})

export const client = new ApolloClient({
	cache,
	link,
	typeDefs,
	resolvers,
})

cache.writeData({
	data: {
		isLoggedIn: false,
		vote: [
			{
				party: "BJP",
				count: 0,
				__typename: "Vote"
			},
			{
				party: "Congress",
				count: 0,
				__typename: "Vote"
			},
		]
	},
});