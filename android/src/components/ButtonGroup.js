// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import windmill1 from '../../assets/images/windmill-min-1.png';
import windmill2 from '../../assets/images/windmill-min-2.png';
import windmill3 from '../../assets/images/windmill-min-3.png';

type Props = {
  changeLevel: Function
};

export default class Pipo extends Component<Props, void> {
  setJunior: Function;
  setExperienced: Function;
  setSenior: Function;

  constructor(props: Props) {
    super(props);
    this.setJunior = this.setJunior.bind(this);
    this.setExperienced = this.setExperienced.bind(this);
    this.setSenior = this.setSenior.bind(this);
  }

  setJunior(): void {
    this.props.changeLevel('junior');
  }

  setExperienced(): void {
    this.props.changeLevel('confirmé');
  }

  setSenior(): void {
    this.props.changeLevel('senior');
  }

  render() {
    const width: Object = {
      width: Dimensions.get('window').width
    };

    return (
      <View style={[styles.container, width]}>
        <TouchableOpacity onPress={this.setJunior}>
          <Image source={windmill1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setExperienced}>
          <Image source={windmill2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setSenior}>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});
