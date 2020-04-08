import gql from "graphql-tag";

export const GET_LAUNCH_OFFSET = gql`
  query stationList($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      mission_id
    }
  }
`;
