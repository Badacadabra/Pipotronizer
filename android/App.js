// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Alert, Share, Vibration, Linking, Clipboard, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import { Asset, AppLoading, Font, FacebookAds } from 'expo';
import Weather from './src/components/Weather';
import Pipo from './src/components/Pipo';
import ButtonGroup from './src/components/ButtonGroup';
import Level from './src/components/Level';

type State = {
  isReady: boolean,
  level: string,
  levelColor: string,
  wheelSpeed: number,
  sky: string
};

let sentence: string = '',
    counterJunior: number = 0,
    counterExperienced: number = 0,
    counterSenior: number = 0;

// FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);

export default class App extends Component<void, State> {
  state: State = {
    isReady: false,
    level: 'confirmé',
    levelColor: '#44DBBD',
    wheelSpeed: 1000,
    sky: 'cloudy'
  };

  componentWillMount() {
    this._cacheResourcesAsync();
  }

   async _cacheResourcesAsync() {
    const images = [
      require('./assets/images/wheel.png'),
      require('./assets/images/background-1.jpg'),
      require('./assets/images/background-2.jpg'),
      require('./assets/images/background-3.jpg'),
      require('./assets/images/dark-blackboard.png'),
      require('./assets/images/windmill-min-1.png'),
      require('./assets/images/windmill-min-2.png'),
      require('./assets/images/windmill-min-3.png')
    ];

    for (let image of images) {
      await Asset.fromModule(image).downloadAsync();
    }

    await Font.loadAsync({
      'tradewinds': require('./assets/fonts/trade_winds/TradeWinds-Regular.ttf'),
      'permanentmarker': require('./assets/fonts/permanent_marker/PermanentMarker.ttf')
    });

    this.setState({ isReady: true });
  }

  changeLevel(level: string): void {
    let levelColor: string = '',
        wheelSpeed: number = 0,
        sky: string = '';

    switch(level) {
      case 'junior':
        levelColor = '#F4BF31';
        wheelSpeed = 2000;
        sky = 'blue';
        counterJunior++;
        break;
      case 'confirmé':
        levelColor = '#44DBBD';
        wheelSpeed = 1000;
        sky = 'cloudy';
        counterExperienced++;
        break;
      case 'senior':
        levelColor = '#9FD7FC';
        wheelSpeed = 500;
        sky = 'gray';
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
      `3 niveaux de brassage éolien sont à votre disposition pour faire face à toutes les situations.

Mais attention : la force du vent détermine la fréquence des pubs, dont les revenus serviront à lutter contre la précarité énergétique.

Pour une expérience optimale, il est conseillé d'avoir au minimum Facebook et Twitter sur votre mobile afin d'épater le monde entier avec vos billevesées.`
    );
  }

  browse(): void {
    Vibration.vibrate();
    Linking.openURL('https://www.pipotronizer.com');
  }

  share(): void {
    Share.share({
      message: sentence,
      url: 'https://www.pipotronizer.com',
      title: `Phrase corporate générée par Pipotronizer`
    }, {
      dialogTitle: 'Cette phrase vous plaît ? Partagez-la !'
    });
  }

  copyToClipboard(): void {
    Clipboard.setString(sentence);
    ToastAndroid.show('Phrase copiée dans le presse-papier', ToastAndroid.SHORT);
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'help-outline', color: '#FFF', underlayColor: '#121212', onPress: this.help }}
          centerComponent={{ text: 'Pipotronizer', style: styles.toolbarTitle, onPress: this.browse}}
          rightComponent={{ icon: 'share', color: '#FFF', underlayColor: '#121212', onPress: this.share }}
          outerContainerStyles={{ backgroundColor: '#0C0C0C', paddingTop: 4 }}
        />
        <Weather sky={this.state.sky} wind={this.state.wheelSpeed} />
        <Pipo level={this.state.level} update={this.update.bind(this)} onPress={this.copyToClipboard} />
        <ButtonGroup changeLevel={this.changeLevel.bind(this)} />
        <Level level={this.state.level} color={this.state.levelColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbarTitle: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'tradewinds'
  }
});
