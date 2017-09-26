// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, ImageBackground, Animated, Easing } from 'react-native';
import wheel from '../../assets/images/wheel.png';
import blue from '../../assets/images/background-1.jpg';
import cloudy from '../../assets/images/background-2.jpg';
import gray from '../../assets/images/background-3.jpg';

type Props = {
  wind: number,
  sky: string
};

export default class Weather extends Component<void, Props, void> {
  animatedValue: Object;

  componentDidMount(): void {
    this.rotateWheel();
  }

  componentWillMount(): void {
    this.animatedValue = new Animated.Value(0);
  }

  reset(): void {
    this.animatedValue.setValue(0);
  }

  rotateWheel(): void {
    this.reset();
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: this.props.wind,
      easing: Easing.linear
    }).start(() => this.rotateWheel());
  }

  render() {
    const interpolateRotation: any = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const animatedStyle: any = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }

    const sky: any = { blue, cloudy, gray }

    return (
      <ImageBackground source={sky[this.props.sky]} style={styles.container}>
        <Animated.Image source={wheel} style={[styles.wheel, animatedStyle]} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 150,
    marginTop: 66,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  }
});
