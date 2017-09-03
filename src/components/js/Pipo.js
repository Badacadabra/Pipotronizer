import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import lexique from '../../lexique.json';
import '../style/Pipo.css';
import windmill1 from '../../images/windmill-min-1.png';
import windmill2 from '../../images/windmill-min-2.png';
import windmill3 from '../../images/windmill-min-3.png';
import donate from '../../images/donate.png';

class Pipo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'masculin',
      nombre: 'singulier'
    };
    this.getSentence = this.getSentence.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }

  randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getSubstring(arr, currentStr) {
    // Pour plus de diversité, le genre et le nombre sont générés aléatoirement (utile pour les groupes nominaux)
    // this.setState(prevState => ({
      // genre: this.randomize(['masculin', 'féminin']),
      // nombre: this.randomize(['singulier', 'pluriel'])
    // }));

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
    let accroches = lexique.phrase.accroche[this.props.level],
        sujets = lexique.phrase.sujet.groupeNominal[this.props.level][this.state.genre][this.state.nombre],
        verbes = lexique.phrase.verbe[this.props.level].conjugué[this.state.nombre],
        compléments = lexique.phrase.complément.groupeNominal[this.props.level][this.state.genre][this.state.nombre],
        adjectifs = lexique.phrase.complément.adjectif[this.props.level][this.state.genre][this.state.nombre],
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

  changeLevel(e) {
    let level = e.target.value,
        levels = ['stagiaire', 'manager', 'consultant'];

    if (levels.includes(level)) {
      this.props.changeLevel(level);
    } else {
      throw new Error('Incorrect level!');
    }
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    let sentence = this.getSentence();

    return (
      <div className="pipo">
        <Grid>
          <Row>
            <Col xs={12}>
              <p>{sentence}</p>
            </Col>
          </Row>
        </Grid>
        <div className="options">
          <input type="image" src={windmill1} alt="Stagiaire" value="stagiaire" onClick={this.changeLevel} />
          <input type="image" src={windmill2} alt="Manager" value="manager" onClick={this.changeLevel} />
          <input type="image" src={windmill3} alt="Consultant" value="consultant" onClick={this.changeLevel} />
        </div>
      </div>
    );
  }
}

export default Pipo;
