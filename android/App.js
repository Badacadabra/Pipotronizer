import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Constants, Font } from 'expo';
import Wheel from './src/components/Wheel';
import Pipo from './src/components/Pipo';
import ButtonGroup from './src/components/ButtonGroup';
import Level from './src/components/Level';
import tradewinds from './assets/fonts/TradeWinds-Regular.ttf';
import blue from './assets/images/sky.jpg';
import clouds from './assets/images/clouds.jpg';
import thunder from './assets/images/thunder.jpg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 'manager',
      levelColor: '#44DBBD',
      wheelSpeed: 1000,
      sky: clouds,
      fontLoaded: false,
      burgerActive: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'tradewinds': tradewinds
    });
    this.setState({ fontLoaded: true });
  }

  changeLevel(level) {
    let levelColor = '',
        wheelSpeed = 0,
        sky = null;

    switch(level) {
      case 'stagiaire':
        levelColor = '#F4BF31';
        wheelSpeed = 2000;
        sky = blue;
        break;
      case 'manager':
        levelColor = '#44DBBD';
        wheelSpeed = 1000;
        sky = clouds;
        break;
      case 'consultant':
        levelColor = '#9FD7FC';
        wheelSpeed = 500;
        sky = thunder;
        break;
      default:
        throw new Error('Incorrect level!');
    }

    this.setState(prevState => ({
      level,
      levelColor,
      wheelSpeed,
      sky
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Header
              statusBarProps={{ barStyle: 'light-content' }}
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Pipotronizer', style: styles.toolbarTitle }}
              rightComponent={{ icon: 'help', color: '#fff' }}
              outerContainerStyles={{ backgroundColor: '#181818' }}
            />
          ) : null
        }
        <Wheel weather={this.state.sky} duration={this.state.wheelSpeed} />
        <Pipo level={this.state.level} style={styles.pipo} />
        <ButtonGroup changeLevel={this.changeLevel.bind(this)} />
        <Level level={this.state.level} color={this.state.levelColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbarTitle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'tradewinds'
  }
});
