import React from 'react';
import './Logout.css'
import { ApolloConsumer } from 'react-apollo';
const Logout = () => {
  return (
    <ApolloConsumer>
      {client => (
        <div className="logout-container" onClick={() => client.writeData({ data: { isLoggedIn: false } })}>
          <div className="logout-btn">Logout</div>
        </div>
      )}
    </ApolloConsumer>

  )
}

export default Logout;