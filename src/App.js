import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { 
  ApolloProvider, 
  InMemoryCache, 
  ApolloClient 
} from '@apollo/client';
import './App.scss';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ApolloProvider>
  );
}

export default App;