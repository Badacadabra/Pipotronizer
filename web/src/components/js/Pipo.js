// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, Tooltip, OverlayTrigger, Glyphicon } from 'react-bootstrap';
import ClipboardButton from 'react-clipboard.js';
import lexique from '../../lexique.json';
import '../style/Pipo.css';
import windmill1 from '../../images/windmill-min-1.png';
import windmill2 from '../../images/windmill-min-2.png';
import windmill3 from '../../images/windmill-min-3.png';

type Props = {
  level: string,
  changeLevel: Function
};

type State = {
  money: number
};

class Pipo extends Component<Props, State> {
  sentence: Object;
  genres: string[];
  nombres: string[];
  genreDuSujet: string;
  genreDuComplément: string;
  nombreDuSujet: string;
  nombreDuComplément: string;
  accroches: string[];
  sujets: string[];
  verbes: string[];
  compléments: string[];
  adjectifs: string[];
  liaisons: string[];
  bouquetsFinaux: string[];
  getSentence: Function;
  changeFragment: Function;
  changeLevel: Function;
  goToLevels: Function;

  constructor(props: Props) {
    super(props);
    this.state = {
      money: 0
    };
    this.genres = ['masculin', 'féminin'];
    this.nombres = ['singulier', 'pluriel'];
    this.getSentence = this.getSentence.bind(this);
    this.changeFragment = this.changeFragment.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.goToLevels = this.goToLevels.bind(this);
  }

  componentWillMount(): void {
    this.sentence = this.getSentence();
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

  getSentence(level?: string = this.props.level): Object {
    this.genreDuSujet = this.randomize(this.genres);
    this.genreDuComplément = this.randomize(this.genres);
    this.nombreDuSujet = this.randomize(this.nombres);
    this.nombreDuComplément = this.randomize(this.nombres);

    if (this.isCorrect(level)) {
      this.accroches = lexique.phrase.accroche[level];
      this.sujets = lexique.phrase.sujet.groupeNominal[level][this.genreDuSujet][this.nombreDuSujet];
      this.verbes = lexique.phrase.verbe[level].conjugué[this.nombreDuSujet];
      this.compléments = lexique.phrase.complément.groupeNominal[level][this.genreDuComplément][this.nombreDuComplément];
      this.adjectifs = lexique.phrase.complément.adjectif[level][this.genreDuComplément][this.nombreDuComplément];
      this.liaisons = lexique.phrase.complément.liaison[level];
      this.bouquetsFinaux = lexique.phrase.complément.bouquetFinal[level];
    }

    let phrase: Object = {},
        s1: string = "",
        s2: string = this.getSubstring(this.sujets),
        s3: string = this.getSubstring(this.verbes),
        s4: string = this.getSubstring(this.compléments),
        s5: string = this.getSubstring(this.adjectifs),
        s6: string = "",
        s7: string = "",
        s8: string = "",
        s9: string = "";

    if (level !== 'junior') {
      s1 = this.getSubstring(this.accroches);
      s9 = this.getSubstring(this.bouquetsFinaux);

      if (level === 'senior') {
        s6 = this.getSubstring(this.liaisons);
        s7 = this.getSubstring(this.compléments, s4);
        s8 = this.getSubstring(this.adjectifs, s5);
      }
    }

    if (level === 'junior') {
      phrase = (
        <span id="sentence">
          <span className="fragment sujets" onClick={this.changeFragment}>{this.capitalize(s2)}</span>
          <span> </span>
          <span className="fragment verbes" onClick={this.changeFragment}>{s3}</span>
          <span> </span>
          <span className="fragment compléments" onClick={this.changeFragment}>{s4}</span>
          <span> </span>
          <span className="fragment adjectifs" onClick={this.changeFragment}>{s5}</span>
          <span>.</span>
        </span>
      );
    } else if (level === 'confirmé') {
      phrase = (
        <span id="sentence">
          <span className="fragment accroches" onClick={this.changeFragment}>{s1}</span>
          <span> </span>
          <span className="fragment sujets" onClick={this.changeFragment}>{s2}</span>
          <span> </span>
          <span className="fragment verbes" onClick={this.changeFragment}>{s3}</span>
          <span> </span>
          <span className="fragment compléments" onClick={this.changeFragment}>{s4}</span>
          <span> </span>
          <span className="fragment adjectifs" onClick={this.changeFragment}>{s5}</span>
          <span> </span>
          <span className="fragment bouquetsFinaux" onClick={this.changeFragment}>{s9}</span>
          <span>.</span>
        </span>
      );
    } else if (level === 'senior') {
      phrase = (
        <span id="sentence">
          <span className="fragment accroches" onClick={this.changeFragment}>{s1}</span>
          <span> </span>
          <span className="fragment sujets" onClick={this.changeFragment}>{s2}</span>
          <span> </span>
          <span className="fragment verbes" onClick={this.changeFragment}>{s3}</span>
          <span> </span>
          <span className="fragment compléments" onClick={this.changeFragment}>{s4}</span>
          <span> </span>
          <span className="fragment adjectifs" onClick={this.changeFragment}>{s5}</span>
          <span> </span>
          <span className="fragment liaisons" onClick={this.changeFragment}>{s6}</span>
          <span> </span>
          <span className="fragment compléments" onClick={this.changeFragment}>{s7}</span>
          <span> </span>
          <span className="fragment adjectifs" onClick={this.changeFragment}>{s8}</span>
          <span> </span>
          <span className="fragment bouquetsFinaux" onClick={this.changeFragment}>{s9}</span>
          <span>.</span>
        </span>
      );
    }

    return phrase;
  }

  changeFragment(e: Object): void {
    const types: string[] = ['accroches', 'sujets', 'verbes', 'compléments', 'adjectifs', 'liaisons', 'bouquetsFinaux'],
          currentType: string = e.target.className.split(' ')[1];

    if (types.includes(currentType)) { // [0] correspond à la classe 'fragment'
      e.target.innerText = this.getSubstring(this[currentType], e.target.textContent);
      let bonus: number | void = this.getMoneyBonus(this.props.level, 'newFragment');

      this.setState(prevState => ({
        money: prevState.money + bonus
      }));
    } else {
      throw new Error('Invalid string type!');
    }
  }

  isCorrect(level: string): boolean {
    let levels: string[] = ['junior', 'confirmé', 'senior'];

    if (!levels.includes(level)) {
      throw new Error('Incorrect level!');
    }

    return true;
  }

  changeLevel(e: Object): void {
    let level: string = e.target.value,
        bonus: number | void = this.getMoneyBonus(level, 'newSentence');

    this.sentence = this.getSentence(level);

    this.setState(prevState => ({
      money: prevState.money + bonus
    }));

    this.props.changeLevel(level);
  }

  getMoneyBonus(level: string, action: string): number | void {
    if (this.isCorrect(level)) {
      switch(level) {
        case 'junior':
          return action === 'newSentence' ? 10 : 2;
        case 'confirmé':
          return action === 'newSentence' ? 50 : 10;
        case 'senior':
          return action === 'newSentence' ? 100 : 20;
        default:
          return 0;
      }
    }
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  goToLevels(): void {
    const levels = document.getElementById('levels');
    require('react-scroll-to-component')(levels);
    // A regular 'import' at the top of the file generates an error in tests with Jest... Keep the 'require' here.
  }

  getText() {
    return document.querySelector('#sentence').textContent;
  }

  onCopy() {
    let tooltipInner = document.querySelector('#tooltip .tooltip-inner');

    if (tooltipInner) {
      tooltipInner.textContent = 'Copiée !';
    }
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip">Copier&#8239;?</Tooltip>
    );

    return (
      <div className="pipo">
        <Grid>
          <Row>
            <Col xs={12}>
              <div className={this.props.level}>
                {this.sentence}
                <ClipboardButton option-text={this.getText} onSuccess={this.onCopy}>
                  <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <Glyphicon id="copyToClipboard" glyph="copy" />
                  </OverlayTrigger>
                </ClipboardButton>
              </div>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} className="options">
              <input type="image" src={windmill1} alt="Junior" value="junior" onClick={this.changeLevel} />
              <input type="image" src={windmill2} alt="Confirmé" value="confirmé" onClick={this.changeLevel} />
              <input type="image" src={windmill3} alt="Senior" value="senior" onClick={this.changeLevel} />
              <p className="how-to"><span onClick={this.goToLevels}>Au secours&#8239;! C'est quoi, tout ça&#8239;?</span></p>
            </Col>
            <Col sm={6} className="money">
              <Row>
                <Col sm={12}>
                  Cagnotte&nbsp;: <span className="amount">{(this.state.money / 100).toFixed(2).replace('.', ',')}&nbsp;€</span>
                </Col>
                <Col sm={12}>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="charset" value="utf-8" />
                    <input type="hidden" name="business" value="contact@badacadabra.net" />
                    <input type="hidden" name="item_name" value="Collecte de fonds pour «&nbsp;Électriciens sans frontières&nbsp;» via Pipotronizer" />
                    <input type="hidden" name="amount" value={(this.state.money / 100).toFixed(2)} />
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
