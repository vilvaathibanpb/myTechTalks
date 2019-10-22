import gql from 'graphql-tag';


export const getTodoQuery = gql`
{
    continents{
      code
      name
    }
  }
`