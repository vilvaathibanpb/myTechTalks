import React, { useState } from 'react';
import './App.css';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';
import client from './ApolloClient';
import { GET_MATCH } from "./query";
const App = () => {
  const [inputName, saveInputName] = useState('');
  const [matchDetails, saveMatchDetails] = useState(null);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Find My Soulmate :</h1>
        <div className="input-container">
          <input type="text" placeholder="Enter your Name" value={inputName} onChange={(e) => saveInputName(e.target.value)} />
          <ApolloConsumer>
            {
              (client) => (
                <button className="girl-btn"
                onClick={async () => {
                  const { data } = await client.query({
                    query: GET_MATCH,
                    fetchPolicy: 'network-only',
                    variables: { name: inputName, gender: "female" }
                  });
                  saveMatchDetails(data.match)
                }}
                >Find a Girl</button>
              )
            }
          </ApolloConsumer>
          <ApolloConsumer>
            {
              (client) => (
                <button className="boy-btn"
                onClick={async () => {
                  const { data } = await client.query({
                    query: GET_MATCH,
                    fetchPolicy: 'network-only',
                    variables: { name: inputName, gender: "male" }
                  });
                  saveMatchDetails(data.match)
                }}
                >Find a Boy</button>
              )
            }
          </ApolloConsumer>
        </div>
          {
            matchDetails && <div className="match-container">
              <li>Name: {matchDetails.name}</li>
              <li>Age: {matchDetails.age}</li>
              <li>Percentage: {matchDetails.percentage}</li>
              <li>Result: {matchDetails.result}</li>
              <h5><u>Photo:</u></h5>
              <img alt="profile pic" src={matchDetails.photo}/>
            </div>
          }
      </div>
    </ApolloProvider>
  );
}

export default App;
