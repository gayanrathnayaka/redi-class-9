import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RestApiExample from "./RestExample/RestApiExample";
import { Tweet } from "./TweetExample/Tweet";
import TweetFeed from "./TweetExample/TweetFeed";
import SimpleStateExample from "./StateExample/SimpleStateExample";

function App() {
  return (

    <div className="App">
      <RestApiExample />
      {/* <TweetFeed /> */}
      {/* <SimpleStateExample /> */}
    </div>



    // <div className="App" style={{
    //   display: 'flex',
    //   height: '100vh',
    //   width: '100vw'
    // }}>
    //   <div style={{
    //     flex: 1,
    //     borderRight: '1px solid #ccc',
    //     overflow: 'auto',
    //     padding: '10px'
    //   }}>
    //     <RestApiExample />
    //   </div>
    //   <div style={{
    //     flex: 1,
    //     borderRight: '1px solid #ccc',
    //     overflow: 'auto',
    //     padding: '10px'
    //   }}>
    //     <TweetFeed />
    //   </div>
    //   <div style={{
    //     flex: 1,
    //     overflow: 'auto',
    //     padding: '10px'
    //   }}>
    //     <SimpleStateExample />
    //   </div>
    // </div>
  );
}

export default App;
