import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_STATIONS } from "./launch.query.graphql";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 50px;
  padding: 5px;
  font-size: 20px;
  margin: 5px;
  background: rgb(51, 103, 214);
  color: #fff;
`;

const Container = styled.div`
  display:flex;
  justify-content: space-between';
  width: 100%;
`;

const Search = () => {
  const [size, setSize] = useState(5);
  const [executeSearch, { data, loading, error, called }] = useLazyQuery(
    GET_STATIONS,
    {
      variables: {
        limit: size,
      },
    }
  );

  useEffect(() => {
    executeSearch();
  }, []);

  const cacheData = window.__APOLLO_CLIENT__.cache.data.data;
  return (
    <Container>
      <div style={{ flex: 1 }}>
        {/* Button Section */}
        <ButtonContainer setSize={setSize} />

        {/* List */}
        {data &&
          data.launchesPast &&
          data.launchesPast.map((launch, i) => (
            <div key={i}>{launch.mission_name}</div>
          ))}

        {/* Unsuccessful states */}
        {error && <div>Something went wrong :(</div>}
        {loading && <div>Loading</div>}
        {!data && called && <div>No results</div>}
      </div>

      {/* Cache data */}
      <div style={{ flex: 1 }}>
        <JSONPretty id="json-pretty" data={cacheData}></JSONPretty>
      </div>
    </Container>
  );
};

const ButtonContainer = ({ setSize }) => (
  <Container>
    <h3>Select Number of Records</h3>
    <Button onClick={() => setSize(5)}>5</Button>
    <Button onClick={() => setSize(10)}>10</Button>
    <Button onClick={() => setSize(15)}>15</Button>
    <Button onClick={() => setSize(20)}>20</Button>
  </Container>
);

export default Search;
