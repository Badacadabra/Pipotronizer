import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import lexique from '../../lexique.json';
import '../style/Pipo.css';
import windmill1 from '../../images/windmill-min-1.png';
import windmill2 from '../../images/windmill-min-2.png';
import windmill3 from '../../images/windmill-min-3.png';

class Pipo extends Component {
  constructor(props) {
    super(props);
    this.getSentence = this.getSentence.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
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
              <p id="sentence">{sentence}</p>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} className="options">
              <input type="image" src={windmill1} alt="Stagiaire" value="stagiaire" onClick={this.changeLevel} />
              <input type="image" src={windmill2} alt="Manager" value="manager" onClick={this.changeLevel} />
              <input type="image" src={windmill3} alt="Consultant" value="consultant" onClick={this.changeLevel} />
              <p className="how-to"><a href="#levels">Au secours&#8239;! C'est quoi, tout ça&#8239;?</a></p>
            </Col>
            <Col sm={6} className="money">
              <Row>
                <Col sm={12}>
                  Cagnotte&nbsp;: <span className="amount">{(this.props.money / 100).toFixed(2).replace('.', ',')} €</span>
                </Col>
                <Col sm={12}>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="charset" value="utf-8" />
                    <input type="hidden" name="business" value="contact@badacadabra.net" />
                    <input type="hidden" name="item_name" value="Collecte de fonds pour «&nbsp;Électriciens sans frontières&nbsp;» via Pipotronizer" />
                    <input type="hidden" name="amount" value={(this.props.money / 100).toFixed(2)} />
                    <input type="hidden" name="currency_code" value="EUR" />
                    <div className="donate">
                      <input type="submit" name="submit" value="Changer en électricité" />
                      <div className="light-bulb"></div>
                    </div>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Pipo;
