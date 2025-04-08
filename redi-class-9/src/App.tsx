import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestApiExample from './RestExample/RestApiExample';
import { Tweet } from './TweetExample/Tweet';
import TweetFeed from './TweetExample/TweetFeed';

function App() {
  return (
    <div className="App">
      {/* <RestApiExample /> */}
      <TweetFeed />
    </div>
  );
}

export default App;
