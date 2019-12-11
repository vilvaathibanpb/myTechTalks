import React, { useState, useEffect } from "react";
import "./App.css";
import TurnTable from "./TurnTable";
import { audioList } from "./assets/audioFiles";
import gql from "graphql-tag";
import { useSubscription } from "react-apollo";

const SUBS = gql`
subscription{
  playbackControl(where:{
    mutation_in: [UPDATED]
  }) {
    node{
      sourceIndex,
      volumeRange,
      isPlay,
      isPause
    }
  }
}
`;

const initialState = {
  sourceIndex: 0,
  isPlay: false,
  isPause: true,
  volumeRange: "0.9"
};
function App() {
  const [playConfig, setConfig] = useState(initialState);
  const { data } = useSubscription(SUBS);

  useEffect(() => {
    if (data && data.playbackControl && data.playbackControl.node) {
      setConfig({
        ...data.playbackControl.node
      });
    }
  }, [data]);

  const { isPause, isPlay, volumeRange, sourceIndex } = playConfig;
  return (
    <div>
      <h1>DJ TurnTable with Remote control</h1>
      <h3> GraphQL Subscription - React/Apollo/Prisma/Web Audio</h3>
      <TurnTable
        source={audioList[sourceIndex]}
        isPlay={isPlay}
        isPause={isPause}
        volumeRange={volumeRange}
      />
    </div>
  );
}

export default App;
