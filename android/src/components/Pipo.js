// @flow
import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, Text, ImageBackground } from 'react-native';
import lexique from '../../assets/lexique.json';
import blackboard from '../../assets/images/dark-blackboard.png';

type Props = {
  level: string,
  update: Function
};

export default class Pipo extends Component<void, Props, void> {
  genres: string[]
  nombres: string[]
  levels: string[]
  getSentence: Function

  constructor(props: Props) {
    super(props);
    this.genres = ['masculin', 'féminin'];
    this.nombres = ['singulier', 'pluriel'];
    this.levels = ['junior', 'confirmé', 'senior'];
    this.getSentence = this.getSentence.bind(this);
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  randomize(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getSubstring(arr: string[], currentStr?: string): string {
    // Chaîne qui sera forcément retournée si la fonction est appelée avec un seul argument
    let newStr: string = this.randomize(arr);

    // Le deuxième argument est utile pour éviter d'avoir 2 fois la même sous-chaîne dans une phrase
    if (currentStr) {
      while (newStr === currentStr) {
        newStr = this.randomize(arr);
      }
    }

    return newStr;
  }

  getSentence(): string {
    let genreDuSujet: string = this.randomize(this.genres),
        genreDuComplément: string = this.randomize(this.genres),
        nombreDuSujet: string = this.randomize(this.nombres),
        nombreDuComplément: string = this.randomize(this.nombres);

    let accroches: string[],
        sujets: string[],
        verbes: string[],
        compléments: string[],
        adjectifs: string[],
        liaisons: string[],
        bouquetsFinaux: string[];

    if (this.levels.includes(this.props.level)) {
      accroches = lexique.phrase.accroche[this.props.level];
      sujets = lexique.phrase.sujet.groupeNominal[this.props.level][genreDuSujet][nombreDuSujet];
      verbes = lexique.phrase.verbe[this.props.level].conjugué[nombreDuSujet];
      compléments = lexique.phrase.complément.groupeNominal[this.props.level][genreDuComplément][nombreDuComplément];
      adjectifs = lexique.phrase.complément.adjectif[this.props.level][genreDuComplément][nombreDuComplément];
      liaisons = lexique.phrase.complément.liaison[this.props.level];
      bouquetsFinaux = lexique.phrase.complément.bouquetFinal[this.props.level];
    } else {
      throw new Error('Incorrect level!');
    }

    let phrase: string = "",
        s1: string = "",
        s2: string = this.getSubstring(sujets),
        s3: string = this.getSubstring(verbes),
        s4: string = this.getSubstring(compléments),
        s5: string = this.getSubstring(adjectifs),
        s6: string = "",
        s7: string = "",
        s8: string = "",
        s9: string = "";

    if (this.props.level !== 'junior') {
      s1 = this.getSubstring(accroches);
      s9 = this.getSubstring(bouquetsFinaux);

      if (this.props.level === 'senior') {
        s6 = this.getSubstring(liaisons);
        s7 = this.getSubstring(compléments, s4);
        s8 = this.getSubstring(adjectifs, s5);
      }
    }

    if (this.props.level === 'junior') {
      phrase = `${this.capitalize(s2)} ${s3} ${s4} ${s5}.`;
    } else if (this.props.level === 'confirmé') {
      phrase = `${s1} ${s2} ${s3} ${s4} ${s5} ${s9}.`;
    } else if (this.props.level === 'senior') {
      phrase = `${s1} ${s2} ${s3} ${s4} ${s5} ${s6} ${s7} ${s8} ${s9}.`;
    }

    return phrase;
  }

  render() {
    let sentence: string = this.getSentence();
    this.props.update(sentence);

    return (
      <ImageBackground source={blackboard} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.sentence}>«&nbsp;{sentence}&nbsp;»</Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  sentence: {
    padding: 10,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'permanentmarker',
    color: '#FFF',
    textAlign: 'center'
  }
});
