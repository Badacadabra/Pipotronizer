import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, ImageBackground, Animated, Easing } from 'react-native';
import wheel from '../../assets/images/wheel.png';

export default class Wheel extends Component {
  componentDidMount() {
    this.rotateWheel();
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  rotateWheel() {
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
