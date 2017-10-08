// @flow
import React, { Component } from 'react';
import '../style/App.css';
import north from '../../images/north.png';
import Header from './Header';
import Headline from './Headline';
import Pipo from './Pipo';
import About from './About';
import Levels from './Levels';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-up';

type State = {
  level: string
};

class App extends Component<null, State> {
  constructor() {
    super();
    this.state = {
      level: 'confirmé'
    };
  }

  changeLevel(level: string):void {
    this.setState(prevState => ({
      level: level
    }));
  }

  render() {
    return (
      <div className="App">
        <Header level={this.state.level} />
        <Headline />
        <Pipo level={this.state.level} changeLevel={this.changeLevel.bind(this)} />
        <About level={this.state.level} />
        <Levels />
        <Footer />
        <ScrollToTop showUnder={360}>
          <img src={north} alt="Remonter" />
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
