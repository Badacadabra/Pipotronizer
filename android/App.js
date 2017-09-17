// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, Share, Vibration } from 'react-native';
import { Header } from 'react-native-elements';
import { Font } from 'expo';
import Wheel from './src/components/Wheel';
import Pipo from './src/components/Pipo';
import ButtonGroup from './src/components/ButtonGroup';
import Level from './src/components/Level';
import tradewinds from './assets/fonts/trade_winds/TradeWinds-Regular.ttf';
import blue from './assets/images/background-1.jpg';
import cloudy from './assets/images/background-2.jpg';
import gray from './assets/images/background-3.jpg';

type State = {
  level: string,
  levelColor: string,
  wheelSpeed: number,
  sky: any,
  fontLoaded: boolean
};

export default class App extends Component<void, void, State> {
  share: Function;

  state: State = {
    level: 'manager',
    levelColor: '#44DBBD',
    wheelSpeed: 1000,
    sky: cloudy,
    fontLoaded: false
  };

  constructor() {
    super();
    this.share = this.share.bind(this);
  }

  async componentDidMount(): any {
    await Font.loadAsync({
      'tradewinds': tradewinds
    });
    this.setState({ fontLoaded: true });
  }

  changeLevel(level: string): void {
    let levelColor: string = '',
        wheelSpeed: number = 0,
        sky: any = null;

    switch(level) {
      case 'stagiaire':
        levelColor = '#F4BF31';
        wheelSpeed = 2000;
        sky = blue;
        break;
      case 'manager':
        levelColor = '#44DBBD';
        wheelSpeed = 1000;
        sky = cloudy;
        break;
      case 'consultant':
        levelColor = '#9FD7FC';
        wheelSpeed = 500;
        sky = gray;
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

  help(): void {
    Alert.alert(
      'Vous aussi, brassez du vent !',
      `Pipotronizer est un générateur de phrases corporate qui vous aide à préparer vos réunions.

3 niveaux de brassage éolien sont à votre disposition, du simple stagiaire au consultant senior...

Avec Pipotronizer, la force du vent est entre vos mains !`
    );
  }

  vibrate(): void {
    Vibration.vibrate();
  }

  share(): void {
    Share.share({
      message: 'Lorem ipsum dolor sit amet',
      url: 'http://pipotronizer.com',
      title: `Ma phrase de ${this.state.level} générée par Pipotronizer`
    }, {
      dialogTitle: 'Cette phrase vous plaît ? Partagez-la !'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Header
              statusBarProps={{ barStyle: 'light-content' }}
              leftComponent={{ icon: 'help-outline', color: '#FFF', underlayColor: '#121212', onPress: this.help }}
              centerComponent={{ text: 'Pipotronizer', style: styles.toolbarTitle, onPress: this.vibrate }}
              rightComponent={{ icon: 'share', color: '#FFF', underlayColor: '#121212', onPress: this.share }}
              outerContainerStyles={{ backgroundColor: '#181818' }}
            />
          ) : null
        }
        <Wheel weather={this.state.sky} duration={this.state.wheelSpeed} />
        <Pipo level={this.state.level} />
        <ButtonGroup changeLevel={this.changeLevel.bind(this)} />
        <Level level={this.state.level} color={this.state.levelColor} fontLoaded={this.state.fontLoaded} />
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
