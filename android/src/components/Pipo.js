import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import lexique from '../../assets/lexique.json';
import tradewinds from '../../assets/fonts/TradeWinds-Regular.ttf';

export default class Pipo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
    this.getSentence = this.getSentence.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'tradewinds': tradewinds
    });
    this.setState({ fontLoaded: true });
  }

  randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getSubstring(arr, currentStr) {
    // Chaîne qui sera forcément retournée si la fonction est appelée avec un seul argument
    let newStr = this.randomize(arr);

    // Le deuxième argument est utile pour éviter d'avoir 2 fois la même sous-chaîne dans une phrase
    if (currentStr) {
      while (newStr === currentStr) {
        newStr = this.randomize(arr);
      }
    }

    return newStr;
  }

  getSentence() {
    let genres = ['masculin', 'féminin'],
        nombres = ['singulier', 'pluriel'],
        genreDuSujet = this.randomize(genres),
        genreDuComplément = this.randomize(genres),
        nombreDuSujet = this.randomize(nombres),
        nombreDuComplément = this.randomize(nombres);

    let accroches = lexique.phrase.accroche[this.props.level],
        sujets = lexique.phrase.sujet.groupeNominal[this.props.level][genreDuSujet][nombreDuSujet],
        verbes = lexique.phrase.verbe[this.props.level].conjugué[nombreDuSujet],
        compléments = lexique.phrase.complément.groupeNominal[this.props.level][genreDuComplément][nombreDuComplément],
        adjectifs = lexique.phrase.complément.adjectif[this.props.level][genreDuComplément][nombreDuComplément],
        liaisons = lexique.phrase.complément.liaison[this.props.level],
        bouquetsFinaux = lexique.phrase.complément.bouquetFinal[this.props.level];

    let phrase = "",
        s1 = "",
        s2 = this.getSubstring(sujets),
        s3 = this.getSubstring(verbes),
        s4 = this.getSubstring(compléments),
        s5 = this.getSubstring(adjectifs),
        s6 = "",
        s7 = "",
        s8 = "",
        s9 = "";

    // Manager ou Consultant
    if (this.props.level !== 'stagiaire') {
      s1 = this.getSubstring(accroches);
      s9 = this.getSubstring(bouquetsFinaux);

      // Consultant uniquement
      if (this.props.level === 'consultant') {
        s6 = this.getSubstring(liaisons);
        s7 = this.getSubstring(compléments, s4);
        s8 = this.getSubstring(adjectifs, s5);
      }
    }

    if (this.props.level === 'stagiaire') {
      phrase = `${this.capitalize(s2)} ${s3} ${s4} ${s5}.`;
    } else if (this.props.level === 'manager') {
      phrase = `${s1} ${s2} ${s3} ${s4} ${s5} ${s9}.`;
    } else if (this.props.level === 'consultant') {
      phrase = `${s1} ${s2} ${s3} ${s4} ${s5} ${s6} ${s7} ${s8} ${s9}.`;
    } else {
      throw new Error('Incorrect level!');
    }

    return phrase;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }

  render() {
    let sentence = this.getSentence();

    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.sentence}>{sentence}</Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sentence: {
    padding: 20,
    fontSize: 20
  }
});
