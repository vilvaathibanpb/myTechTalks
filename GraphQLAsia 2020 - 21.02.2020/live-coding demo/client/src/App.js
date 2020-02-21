import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./Components/Client";
import SalaryComponentHooks from "./Components/SalaryComponentHooks";
import SalaryComponentRP from "./Components/SalaryComponentRP";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 24px;
`;


function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <SalaryComponentHooks />
        <SalaryComponentRP />
      </Container>
    </ApolloProvider>
  );
}

export default App;
