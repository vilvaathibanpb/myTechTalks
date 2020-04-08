import gql from "graphql-tag";

export const GET_STATIONS = gql`
  query stationList($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      mission_id
    }
  }
`;
