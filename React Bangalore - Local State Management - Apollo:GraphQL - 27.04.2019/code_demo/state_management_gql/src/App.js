import React from 'react';
import { Query } from 'react-apollo';
import './App.css';
import Login from './component/Login/Login';
import Party from './component/Party/Party';
import Logout from './component/Logout/Logout';
import { GET_PARTY } from './apollo/queries';

function App() {
  return (
    <div className="App">
      <h1>Vote - Using GraphQL Local State</h1>
      <Query query={GET_PARTY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR</p>;
          return (
            <div>
              {data.isLoggedIn ?
                
                data.party.length > 0 && data.party.map((e, i) => {
                  return <Party data={e} vote={data.vote} key={i} />
                }) : <Login /> 
              }
              {data.isLoggedIn && <Logout />}
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
