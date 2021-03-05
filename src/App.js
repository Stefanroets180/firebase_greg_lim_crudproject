import React, { Component } from 'react';
import firebase from "firebase/app"

class App extends Component {
  
  constructor(){
    super();
    console.log(firebase);
  }

  render() {        
    return (
      <div>
        <h1>hello </h1>
      </div>
    );
  }
}

export default App;
