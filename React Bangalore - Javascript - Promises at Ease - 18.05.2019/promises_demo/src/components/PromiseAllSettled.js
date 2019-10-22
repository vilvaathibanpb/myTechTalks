import React from "react";
import { randomPromise } from "../utils/dummyPromise";
import Box from "./Box";
let allSettled = require("promise.allsettled");

class PromiseAllSettled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainThread: "idle",
      promise: ["idle","idle","idle","idle","idle",]
    };
  }

  startPromise = () => {
    this.setState({
      mainThread: "pending",
      promise: ["pending","pending","pending","pending","pending"]
    });
    const promiseArray = [
      randomPromise(0, true),
      randomPromise(1, true),
      randomPromise(2, false),
      randomPromise(3, true),
      randomPromise(4, false)
    ];

    allSettled(promiseArray).then((res) => {
     const promiseRes = res.map((e) => e.status);
     this.setState({
       promise: promiseRes
     })
    })

    this.setState({
      mainThread: "fulfilled"
    });
  };
  render() {
    const { mainThread, promise } = this.state;
    return (
      <div>
        <button onClick={this.startPromise}>Start Promise All Settled</button>
        <Box state={mainThread} name="Main Thread" />
        {promise.map((p, i) => (
          <Box key={i} state={p} name={"Promise - " + i} />
        ))}
      </div>
    );
  }
}

export default PromiseAllSettled;
