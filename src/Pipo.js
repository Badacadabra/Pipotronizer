import React, { Component } from 'react';
import lexique from './lexique.json';

class Pipo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      niveau: 'stagiaire',
      genre: 'masculin',
      nombre: 'singulier'
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
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

  handleButtonClick(e) {
    switch (e.target.textContent) {
      case 'Stagiaire':
        this.setState(prevState => ({
          niveau: 'stagiaire'
        }));
        break;
      case 'Manager':
        this.setState(prevState => ({
          niveau: 'manager'
        }));
        break;
      case 'Consultant':
        this.setState(prevState => ({
          niveau: 'consultant'
        }));
        break;
      default:
        throw new Error('Incorrect level!');
    }
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    let accroches = lexique.phrase.accroche[this.state.niveau],
        sujets = lexique.phrase.sujet.groupeNominal[this.state.niveau][this.state.genre][this.state.nombre],
        verbes = lexique.phrase.verbe[this.state.niveau].conjugué[this.state.nombre],
        compléments = lexique.phrase.complément.groupeNominal[this.state.niveau][this.state.genre][this.state.nombre],
        adjectifs = lexique.phrase.complément.adjectif[this.state.niveau][this.state.genre][this.state.nombre],
        liaisons = lexique.phrase.complément.liaison[this.state.niveau],
        bouquetsFinaux = lexique.phrase.complément.bouquetFinal[this.state.niveau];

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
    if (this.state.niveau !== 'stagiaire') {
      s1 = this.getSubstring(accroches);
      s9 = this.getSubstring(bouquetsFinaux);

      // Consultant uniquement
      if (this.state.niveau === 'consultant') {
        s6 = this.getSubstring(liaisons);
        s7 = this.getSubstring(compléments, s4);
        s8 = this.getSubstring(adjectifs, s5);
      }
    }

    if (this.state.niveau === 'stagiaire') {
      phrase = `${this.capitalize(s2)} ${s3} ${s4} ${s5}.`;
    } else if (this.state.niveau === 'manager') {
      phrase = `${s1} ${s2} ${s3} ${s4} ${s5} ${s9}.`;
    } else if (this.state.niveau === 'consultant') {
      phrase = `${s1} ${s2} ${s3} ${s4} ${s5} ${s6} ${s7} ${s8} ${s9}.`;
    } else {
      throw new Error('Incorrect level!');
    }

    return (
      <div className="pipo">
        <p>{phrase}</p>
        <button onClick={this.handleButtonClick}>Stagiaire</button>
        <button onClick={this.handleButtonClick}>Manager</button>
        <button onClick={this.handleButtonClick}>Consultant</button>
      </div>
    );
  }
}

export default Pipo;
