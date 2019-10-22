import * as React from 'react';
import { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
const App = React.lazy(() => import('./App'));

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
