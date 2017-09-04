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
      level: 'manager',
      money: 0
    };
  }

  changeLevel(level) {
    // La cagnotte augmente d'autant plus que le niveau est élevé !
    let bonus = 0;

    switch(level) {
      case 'stagiaire':
        bonus = 5;
        break;
      case 'manager':
        bonus = 10;
        break;
      case 'consultant':
        bonus = 20;
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
        <About />
        <Levels />
        <Footer />
      </div>
    );
  }
}

export default App;
