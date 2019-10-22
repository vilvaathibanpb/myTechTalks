import React from "react";
import { randomPromise } from "../utils/dummyPromise";
import Box from "./Box";

class PromiseChain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainThread: "idle",
      promise: ["idle"]
    };
  }

  startPromise = () => {
    this.setState({
      mainThread: "pending",
      promise: ["pending"]
    });
    randomPromise(0, true)
      .then(response => {
        this.setState({
          promise: ["fulfilled", "pending"]
        });
        return randomPromise(0, true);
      })
      .then(response => {
        this.setState({
          promise: ["fulfilled", "fulfilled", "pending"]
        });
        return randomPromise(0, false);
      })
      .then(res =>
        this.setState({
          promise: ["fulfilled", "fulfilled", "fulfilled"]
        })
      )
      .catch(err =>
        this.setState({
          promise: ["fulfilled", "fulfilled", "rejected"]
        })
      )
      .finally(() => console.log("Done"));
    this.setState({
      mainThread: "fulfilled"
    });
  };
  render() {
    const { mainThread, promise } = this.state;
    return (
      <div>
        <button onClick={this.startPromise}>Start Promise Chain</button>
        <Box state={mainThread} name="Main Thread" />
        {promise.map((p, i) => (
          <Box key={i} state={p} name={"Promise - " + i} />
        ))}
      </div>
    );
  }
}

export default PromiseChain;
