// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, ImageBackground, Animated, Easing } from 'react-native';
import wheel from '../../assets/images/wheel.png';

type Props = {
  duration: number,
  weather: string
};

export default class Wheel extends Component<void, Props, void> {
  animatedValue: Object;

  componentDidMount(): void {
    this.rotateWheel();
  }

  componentWillMount(): void {
    this.animatedValue = new Animated.Value(0);
  }

  rotateWheel(): void {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: this.props.duration,
      easing: Easing.linear
    }).start(() => this.rotateWheel());
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }

    return (
      <ImageBackground source={this.props.weather} style={styles.container}>
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
    alignItems: 'center'
  }
});
