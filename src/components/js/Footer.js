import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/Footer.css';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col md={4}>
              <h3>Pipotronizer 2.0</h3>
              <a href="https://www.facebook.com/badacadabra.net/" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src={facebook} alt="@Pipotronizer sur Facebook" />
                  <figcaption className="facebook">@Pipotronizer</figcaption>
                </figure>
              </a>
              <a href="https://twitter.com/badacadabra" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src={twitter} alt="@Pipotronizer sur Twitter" />
                  <figcaption className="twitter">@Pipotronizer</figcaption>
                </figure>
              </a>
              <h3>Partagez&#8239;!</h3>
              <div>Share This</div>
            </Col>
            <Col md={4}>
              <h3>Faire un don</h3>
              <p>Si vous souhaitez faire un geste spontané pour les plus démunis sur le plan énergétique, vous pouvez faire un don sans même tenir compte de votre cagnotte dûment constituée. L'argent récolté sera intégralement reversé à <a className="highlight" href="https://www.electriciens-sans-frontieres.org/" target="_blank" rel="noopener noreferrer">Électriciens sans frontières</a>.</p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="H7KQTUZR3ZXBJ" />
                <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne" />
                <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Col>
            <Col md={4}>
              <h3>Contact</h3>
              <p>Pour toute proposition de termes corporate, un éventuel partenariat, ou si <span className="highlight">Pipotronizer</span> vous a été utile dans la préparation de vos réunions, vous pouvez envoyer vos commentaires par mail à cette adresse&nbsp;:</p>
              <p><a href="mailto:contact@pipotronizer.com" className="highlight">contact@pipotronizer.com</a></p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
