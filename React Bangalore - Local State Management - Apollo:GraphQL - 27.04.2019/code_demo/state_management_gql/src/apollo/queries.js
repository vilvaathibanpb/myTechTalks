import gql from "graphql-tag";

export const GET_PARTY = gql`
query Party{
  party{
    id
    name
    candidate
    flag
    pic
  }
  vote @client{
    party
    count
}
  isLoggedIn @client
}
`

export const ADD_VOTE = gql`
mutation addVote($name: String) {
    addVote(name: $name) @client {
        count
        party
  }
}
`

export const GET_VOTES = gql`
{
    vote @client{
        count
        party
    }
}
`