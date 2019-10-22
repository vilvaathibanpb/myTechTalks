import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { GetLaunches } from "./types/types";

export default function App() {

    const {
      data: { launchesPast }
    } = useQuery<GetLaunches.Query>(query);



  return (
    <React.Fragment>
      {launchesPast && launchesPast.map(({ mission_name, launch_success, rocket, details, ships, links }) => (
        <div key={String(mission_name)}>
          <h3>
            🛰 {mission_name} 🚀 {rocket.name}
          </h3>
          <p>{details}</p>
          <h3>Success: {launch_success ? "✅" : "❌"}</h3>
          <img src={links.flickr_images[0]} width="200" />
        </div>
      ))}
    </React.Fragment>
  );
}

const query = gql`
  query getLaunches {
    launchesPast {
      mission_name
      mission_id
      details
      links {
        flickr_images
      }
      rocket {
        name: rocket_name
      }
      ships {
        id
      }
      launch_success
    }
  }
`;
