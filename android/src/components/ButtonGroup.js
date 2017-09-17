// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import windmill1 from '../../assets/images/windmill-min-1.png';
import windmill2 from '../../assets/images/windmill-min-2.png';

import windmill3 from '../../assets/images/windmill-min-3.png';

type Props = {
  changeLevel: Function
};

export default class Pipo extends Component<void, Props, void> {
  setIntern: Function;
  setManager: Function;
  setConsultant: Function;

  constructor(props: Props) {
    super(props);
    this.setIntern = this.setIntern.bind(this);
    this.setManager = this.setManager.bind(this);
    this.setConsultant = this.setConsultant.bind(this);
  }

  setIntern(): void {
    this.props.changeLevel('stagiaire');
  }

  setManager(): void {
    this.props.changeLevel('manager');
  }

  setConsultant(): void {
    this.props.changeLevel('consultant');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.setIntern}>
          <Image source={windmill1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setManager}>
          <Image source={windmill2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setConsultant}>
          <Image source={windmill3} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
