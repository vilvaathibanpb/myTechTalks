import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { getTodoQuery } from "./queries";

const Todos = () => {
  return (
    <Query query={getTodoQuery}>
      {({ data, loading, error }) => {
        if (loading) return <p data-testid="loading">Loading ...</p>;
        if (error) return <p data-testid="error">ERROR</p>;

        return (
          <Fragment>
              <h2 data-testid="success">List of Continents</h2>
            {data.continents && data.continents.map((e, i) => <li key={i}>{e.name}<span>: {e.code}</span></li>)}
          </Fragment>
        );
      }}
    </Query>
  );
};

export default Todos;
