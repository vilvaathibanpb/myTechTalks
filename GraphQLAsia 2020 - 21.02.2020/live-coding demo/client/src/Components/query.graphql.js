import gql from "graphql-tag";

export const getSalaryDetails = gql`
  query getSalaryDetails {
    salaryDetails {
      experience
      education
      salary
      location
      role
    }
  }
`;
