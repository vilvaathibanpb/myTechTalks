import React from "react";
import { randomPromise } from "../utils/dummyPromise";
import Box from "./Box";

class PromiseChainDynamic extends React.Component {
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
    const promiseArray = [
      randomPromise,
      randomPromise,
      randomPromise,
      randomPromise,
      randomPromise
    ];

    promiseArray
      .reduce((acc, next, i) => {
        return acc.then(() => {
          const tempPromise = this.state.promise;
          if (i > 0) tempPromise[i - 1] = "fulfilled";
          tempPromise[i] = "pending";
          this.setState({
            promise: tempPromise
          });
          return next(i, true);
        });
      }, Promise.resolve())
      .then(r => {
        const tempPromise = this.state.promise;
        tempPromise[tempPromise.length - 1] = "fulfilled";
        this.setState({
          promise: tempPromise
        });
      });

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

export default PromiseChainDynamic;
