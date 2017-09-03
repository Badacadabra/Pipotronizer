import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header';
import Headline from './Headline';
import Pipo from './Pipo';
import About from './About';
import Levels from './Levels';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      niveau: 'stagiaire'
    };
  }

  changeLevel(level) {
    this.setState(prevState => ({
      niveau: level
    }));
  }

  render() {
    return (
      <div className="App">
        <Header level={this.state.niveau} />
        <Headline />
        <Pipo level={this.state.niveau} changeLevel={this.changeLevel.bind(this)} />
        <About />
        <Levels />
        <Footer />
      </div>
    );
  }
}

export default App;
