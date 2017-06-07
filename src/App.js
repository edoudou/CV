import React, { Component } from 'react';
import Section from './Section';
import CVHeader from './CVHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CVHeader title="Edouard Short" subtitle="Ingenieur High-Tech"/>

        {/*<Section title="Test" content={
          <div>
            Test
          </div>}
        />*/}
      </div>
    );
  }
}

export default App;
