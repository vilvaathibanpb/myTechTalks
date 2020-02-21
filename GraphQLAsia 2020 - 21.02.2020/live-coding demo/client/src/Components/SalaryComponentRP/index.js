import React from "react";
// import { Query } from "react-apollo";
import { getSalaryDetails } from "../query.graphql";
import styled from "styled-components";
import { Query } from "../../CustomImplementation/Query";

const SalaryComponentRP = () => {
  return (
    <Query query={getSalaryDetails}>
      {({ loading, error, data }) => {
        if (loading) return <div>loading...</div>;
        if (error) return <div>Error! :(</div>;

        return (
          <Container>
            <Item>{data && data.salaryDetails.experience}</Item>
            <Item>{data && data.salaryDetails.education}</Item>
            <Item>{data && data.salaryDetails.role}</Item>
            <Item>{data && data.salaryDetails.location}</Item>
            <Item>{data && data.salaryDetails.salary}</Item>
          </Container>
        );
      }}
    </Query>
  );
};

export default SalaryComponentRP;

















const Container = styled.div`
  background: #fc5185;
  height: 50vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

const Title = styled.div`
    font-size: 28px;
    color: #364f6b;
    font-weight: bold;
    margin-bottom: 20px;
`
