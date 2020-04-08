import React, { useState, useEffect } from "react";
import { useLazyQuery, useApolloClient } from "@apollo/react-hooks";
import { GET_LAUNCH_OFFSET } from "./launch.query.graphql";
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

const Text = styled.div`
  margin: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;

const ListWithOffset = () => {
  const client = useApolloClient();
  const [offset, setOffset] = useState(0);
  const [dummy, refreshComponent] = useState(false);
  const [executeSearch, { data, loading, error, called }] = useLazyQuery(
    GET_LAUNCH_OFFSET,
    {
      variables: {
        limit: 5,
        offset
      },
    }
  );

  useEffect(() => {
    executeSearch();
  }, []); // eslint-disable-line

  useEffect(() => {
    client.cache.gc()
  }, [data])

  const deleteCache = (mission_name) => {
    client.cache.evict(
      client.cache.identify({
        __typename: "Launch",
        mission_name,
      })
    );

    // Field delete

    // client.cache.evict(client.cache.identify({
    //   __typename: "Launch",
    //   mission_name
    // }), 'mission_id')
    refreshComponent(!dummy);
  };

  const cacheData = window.__APOLLO_CLIENT__.cache.data.data;
  return (
    <Container>
      <div style={{ flex: 1 }}>
        {/* Button Section */}
        <Button onClick={() => {
          client.resetStore();
          setOffset(offset + 5);
        }}> Next </Button>
        {/* List */}
        {data &&
          data.launchesPast &&
          data.launchesPast.map((launch, i) => (
            <Text onClick={() => deleteCache(launch.mission_name)} key={i}>
              {launch.mission_name}
            </Text>
          ))}

        {/* Unsuccessful states */}
        {error && <Text>Something went wrong :(</Text>}
        {loading && <Text>Loading...</Text>}
        {!data && called && <Text>No results</Text>}
      </div>

      {/* Cache data */}
      <div style={{ flex: 1 }}>
        <JSONPretty id="json-pretty" data={cacheData}></JSONPretty>
      </div>
    </Container>
  );
};

export default ListWithOffset;
