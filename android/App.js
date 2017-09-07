import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, Animated, Easing } from 'react-native';
import { Header } from 'react-native-elements';
import { Constants, Font } from 'expo';
import Wheel from './src/components/Wheel';
import Pipo from './src/components/Pipo';
import tradewinds from './assets/fonts/TradeWinds-Regular.ttf';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 'manager',
      wheelSpeed: 1000,
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
    let wheelSpeed = 0;

    switch(level) {
      case 'stagiaire':
        wheelSpeed = 2000;
        break;
      case 'manager':
        wheelSpeed = 1000;
        break;
      case 'consultant':
        wheelSpeed = 500;
        break;
      default:
        throw new Error('Incorrect level!');
    }

    this.setState(prevState => ({
      level,
      wheelSpeed
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
        <Wheel duration={this.state.wheelSpeed} />
        <Pipo
          level={this.state.level}
          changeLevel={this.changeLevel.bind(this)}
          style={styles.pipo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    // Hack to fix a bug with Expo
    height: Constants.statusBarHeight + (Platform.OS === "ios" ? 44 : 56),
    paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight
  },
  toolbarTitle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'tradewinds'
  }
});
