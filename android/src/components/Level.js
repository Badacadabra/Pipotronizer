// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

type Props = {
  color: string,
  level: string
};

export default class Pipo extends Component<void, Props, void> {
  render() {
    const width: Object = {
      width: Dimensions.get('window').width
    };

    return (
      <View style={[styles.container, width, {backgroundColor: this.props.color}]}>
        <Text style={styles.level}>Niveau : {this.props.level}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  level: {
    color: '#181818',
    fontSize: 20,
    fontFamily: 'tradewinds',
    textAlign: 'center'
  }
});
