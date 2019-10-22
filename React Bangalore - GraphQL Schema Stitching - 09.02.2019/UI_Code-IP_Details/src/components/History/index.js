import React from 'react';

const History = (props) => {
    const {listofIp, saveIpAddress} = props;
    return (
        <div className="history-bar">
            <div className="sub-title">Search History :</div>
            {listofIp.map((e, i) => {
              return e ? <div key={i} className="ip-list" onClick={() => { saveIpAddress(e) }}>{e}</div> : null;
            })}
          </div>
    );
}

export default History;