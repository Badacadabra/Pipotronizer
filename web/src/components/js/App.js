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
  level: string,
  money: number
};

class App extends Component<null, State> {
  constructor() {
    super();
    this.state = {
      level: 'confirmé',
      money: 0
    };
  }

  changeLevel(level: string):void {
    // La cagnotte augmente d'autant plus que le niveau est élevé !
    let bonus: number = 0;

    switch(level) {
      case 'junior':
        bonus = 10;
        break;
      case 'confirmé':
        bonus = 50;
        break;
      case 'senior':
        bonus = 100;
        break;
      default:
        throw new Error('Incorrect level!');
    }

    this.setState(prevState => ({
      level: level,
      money: prevState.money + bonus
    }));
  }

  render() {
    return (
      <div className="App">
        <Header level={this.state.level} />
        <Headline />
        <Pipo level={this.state.level} money={this.state.money} changeLevel={this.changeLevel.bind(this)} />
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
