import React from "react";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import client from "./Client";
import Todos from "./Todos";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Apollo Client - Unit Testing</h1>
        <Todos />
      </div>
    </ApolloProvider>
  );
}

export default App;
