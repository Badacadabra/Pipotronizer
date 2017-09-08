import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

export default class Pipo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.color}]}>
        <Text style={styles.level}>Niveau : {this.props.level}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: Dimensions.get('window').width
  },
  level: {
    color: '#181818',
    fontSize: 20,
    textAlign: 'center'
  }
});