import gql from 'graphql-tag';

export const GET_MATCH = gql`
query getMatch($gender: String, $name: String){
    match(gender: $gender, name: $name){
      name
      age
      photo
      percentage
      result
    }
  }
`;