import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header';
import Headline from './Headline';
import Pipo from './Pipo';
import About from './About';
import Levels from './Levels';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header situation="Coup de vent" strength="Force 8" speed="65 km/h" />
        <Headline />
        <Pipo />
        <About />
        <Levels />
        <Footer />
      </div>
    );
  }
}

export default App;
