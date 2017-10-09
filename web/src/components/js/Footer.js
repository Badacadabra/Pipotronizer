import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/Footer.css';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import googlePlay from '../../images/google_play.png';
import github from '../../images/github.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col md={4}>
              <h3>Pipotronizer 2.0</h3>
              <div className="social">
                <a href="https://fr-fr.facebook.com/pipotronizer" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Pipotronizer sur Facebook" />
                </a>
                <a href="https://twitter.com/pipotronizer" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Pipotronizer sur Twitter" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={googlePlay} alt="Pipotronizer sur Android" />
                </a>
                <a href="https://github.com/Badacadabra/Pipotronizer" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="Pipotronizer sur GitHub" />
                </a>
              </div>
              <div className="sharethis-inline-reaction-buttons"></div>
            </Col>
            <Col md={4}>
              <h3>Coup de pouce</h3>
              <p>Si vous aimez <span className="highlight">Pipotronizer</span> et que vous souhaitez soutenir le projet, vous pouvez faire un don «&nbsp;coup de pouce&nbsp;» en cliquant sur le bouton ci-dessous. Ce don n'a rien à voir avec votre cagnotte et permettra surtout à votre serviteur de payer ses factures d'électricité.</p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="H7KQTUZR3ZXBJ" />
                <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne" />
                <img alt="" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Col>
            <Col md={4}>
              <h3>Contact</h3>
              <p>Pour toute proposition de termes corporate, un éventuel partenariat, un signalement de bug, ou tout simplement si <span className="highlight">Pipotronizer</span> vous a été utile dans la préparation de vos réunions, vous pouvez envoyer un mail à cette adresse&nbsp;:</p>
              <p><a href="mailto:pipotronizer@badacadabra.net" className="highlight">pipotronizer@badacadabra.net</a></p>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className="credits">
          <Row>
            <Col md={12}>
              Brassé avec <span className="red">&hearts;</span> <a href="https://twitter.com/Badacadabra" target="_blank" rel="noopener noreferrer">@Badacadabra</a>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
