import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PromiseComp from "./components/PromiseComp";
import PromiseChain from "./components/PromiseChain";
import PromiseChainDynamic from "./components/PromiseChainDynamic";
import PromiseAll from "./components/PromiseAll";
import PromiseRace from "./components/PromiseRace";
import PromiseAllSettled from "./components/PromiseAllSettled";
import PromiseAllFail from "./components/PromiseAllFail";

function App() {
  return (
    <Router>
      <div>
        <h2>Promises at Ease</h2>
      <div className="App">
        <ul className="routes">
          <li>
            <NavLink activeClassName="active" to="/promise">Promise</NavLink>
          </li>
          <li>
            <NavLink to="/promise-chain">Promise Chaining</NavLink>
          </li>
          <li>
            <NavLink to="/promise-chain-dynamic">Promise Chaining - Dynamic</NavLink>
          </li>
          <li>
            <NavLink to="/promise-all">Promise.all</NavLink>
          </li>
          <li>
            <NavLink to="/promise-all-fail">Promise.all (Fail)</NavLink>
          </li>
          <li>
            <NavLink to="/promise-race">Promise.race</NavLink>
          </li>
          <li>
            <NavLink to="/promise-allSettled">Promise.allSettled</NavLink>
          </li>
        </ul>
        <div style={{width: "100%"}}>
          <Route path="/promise/" component={PromiseComp} />
          <Route path="/promise-chain/" component={PromiseChain} />
          <Route
            path="/promise-chain-dynamic/"
            component={PromiseChainDynamic}
          />
          <Route path="/promise-all/" component={PromiseAll} />
          <Route path="/promise-all-fail/" component={PromiseAllFail} />
          <Route path="/promise-race/" component={PromiseRace} />
          <Route path="/promise-allSettled/" component={PromiseAllSettled} />
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
