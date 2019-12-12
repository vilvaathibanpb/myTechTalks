import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Remote from './Remote';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
const client = new ApolloClient({
  uri: 'https://eu1.prisma.sh/vilva-athiban-p-b-2eb6c4/demo-server/dev',
});


export default function App() {
  return (
    <ApolloProvider client={client}>
    <View style={styles.container}>
      <Remote />
    </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
