import React, { useState } from "react";
import { ApolloProvider, Query } from "react-apollo";
import { ipHistory, stitchedClient } from "./config/config";
import axios from "axios";
import { stitchedQuery, getIps } from "./queries/query";
import History from "./components/History";
import Loader from "./components/Loader";
import Data from "./components/Data";
import "./App.scss";

const App = () => {

  //States
  const [ipaddress, saveIpAddress] = useState("");
  const [tempaddress, saveTempAddress] = useState("");
  //Save Ip Address to Server
  const saveIpHistory = async () => {
    const saveList = await axios.get(
      `${ipHistory.baseURL}${ipHistory.save}?ip=${ipaddress}`
    );
  };

  return (
    <ApolloProvider client={stitchedClient}>
      <div className="App">
        <div className="title">IP Address' UserDetails</div>
        <div className="container">
          <div className="main-container">
            <div className="input-container">

              {/* Input Box */}
              <input
                type="text"
                name="ipAddress"
                value={tempaddress}
                className="input-box"
                onChange={e => {
                  saveTempAddress(e.target.value);
                }}
              />
              <div onClick={() => { saveIpAddress(tempaddress) }}
                className="button" >Search</div>
            </div>

            {ipaddress && <Query query={stitchedQuery} variables={{ ipaddress }}>
              {({ loading, error, data,refetch }) => {
                if (!ipaddress) return null
                if (loading) return <Loader />;
                if (error) return <div className="details">Invalid Ip Address</div>;
                saveIpHistory();
                refetch();
                return (

                  <Data countryData={data.getLocation.country_details} />
                );
              }}
            </Query>}
          </div>
          {/* Loader */}

          {/* History Section */}
          {<Query query={getIps}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <div className="details">Invalid Ip Address</div>;
              return (
                <History listofIp={data.ips} saveIpAddress={saveIpAddress} />
              );
            }}
          </Query>}
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
