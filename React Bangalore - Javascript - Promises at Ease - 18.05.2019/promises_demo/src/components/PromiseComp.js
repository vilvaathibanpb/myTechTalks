import React from 'react';
import { randomPromise } from '../utils/dummyPromise';
import Box from './Box';

class PromiseComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mainThread: "idle",
            promise: "idle"
        }
    }

    startPromise = () => {
        this.setState({
            mainThread: "pending",
            promise: "pending"
        })
        randomPromise(0, true)
            .then((response) => this.setState({
                promise: "fulfilled"
            }))
            .catch((err) => this.setState({
                promise: "rejected"
            }))
        this.setState({
            mainThread: "fulfilled"
        })
    }
    render() {
        const {mainThread, promise} = this.state;
        return(
            <div>
                <button onClick={this.startPromise}>Start Single Promise</button>
                <Box state={mainThread} name="Main Thread" />
                <Box state={promise} name="Promise" />
            </div>
        )
    }
}

export default PromiseComp;