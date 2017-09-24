// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, Share, Vibration } from 'react-native';
import { Header } from 'react-native-elements';
import { Font, WebBrowser, FacebookAds } from 'expo';
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

let sentence: string = '',
    counterJunior: number = 0,
    counterExperienced: number = 0,
    counterSenior: number = 0;

FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);

export default class App extends Component<void, void, State> {
  state: State = {
    level: 'confirmé',
    levelColor: '#44DBBD',
    wheelSpeed: 1000,
    sky: cloudy,
    fontLoaded: false
  };

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
      case 'junior':
        levelColor = '#F4BF31';
        wheelSpeed = 2000;
        sky = blue;
        counterJunior++;
        break;
      case 'confirmé':
        levelColor = '#44DBBD';
        wheelSpeed = 1000;
        sky = cloudy;
        counterExperienced++;
        break;
      case 'senior':
        levelColor = '#9FD7FC';
        wheelSpeed = 500;
        sky = gray;
        counterSenior++;
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

  displayAd(): void {
    FacebookAds.InterstitialAdManager.showAd('283520152134431_283525962133850')
      .then(didClick => {})
      .catch(error => {})
  }

  update(bullshit: string): void {
    sentence = bullshit;

    if (counterJunior === 10) {
      counterJunior = 0;
      this.displayAd();
    }

    if (counterExperienced === 6) {
      counterExperienced = 0;
      this.displayAd();
    }

    if (counterSenior === 3) {
      counterSenior = 0;
      this.displayAd();
    }
  }

  help(): void {
    Alert.alert(
      'Brassez du vent !',
      `3 niveaux de brassage éolien sont à votre disposition pour faire face à toutes les situtations.

Mais attention : la force du vent détermine la fréquence des pubs, dont les revenus serviront à lutter contre la précarité énergétique.

Avec Pipotronizer, brasser du vent n'a jamais été aussi utile !`
    );
  }

  browse(): void {
    Vibration.vibrate();
    WebBrowser.openBrowserAsync('http://pipo.badacadabra.net');
  }

  share(): void {
    Share.share({
      message: sentence,
      url: 'http://pipotronizer.com',
      title: `Phrase corporate générée par Pipotronizer`
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
              centerComponent={{ text: 'Pipotronizer', style: styles.toolbarTitle, onPress: this.browse}}
              rightComponent={{ icon: 'share', color: '#FFF', underlayColor: '#121212', onPress: this.share }}
              outerContainerStyles={{ backgroundColor: '#181818' }}
            />
          ) : null
        }
        <Wheel weather={this.state.sky} duration={this.state.wheelSpeed} />
        <Pipo level={this.state.level} update={this.update.bind(this)} />
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
