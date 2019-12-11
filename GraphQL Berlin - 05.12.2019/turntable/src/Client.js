import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'https://eu1.prisma.sh/vilva-athiban-p-b-2eb6c4/demo-server/dev',
});
const wsLink = new WebSocketLink({
  uri: 'wss://eu1.prisma.sh/vilva-athiban-p-b-2eb6c4/demo-server/dev',
  options: {
    reconnect: true
  },
});
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);
const cache = new InMemoryCache();
export const client = new ApolloClient({ link, cache });