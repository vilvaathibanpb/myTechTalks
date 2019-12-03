import React from "react";
import "./App.css";
import TurnTable from "./TurnTable";
import { audioList } from "./assets/audioFiles";

function App() {
  return (
    <div>
      <h1>DJ TurnTable with Remote control</h1>
      <h3> GraphQL Subscription - React/Apollo/Prisma/Web Audio</h3>
      <TurnTable source={audioList[1]} isPlay={true} isPause={false} volumeRange={0.1} />
    </div>
  );
}

export default App;
