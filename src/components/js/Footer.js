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
              <figure>
                <img src={facebook} alt="@Pipotronizer sur Facebook" />
                <figcaption className="facebook">@Pipotronizer</figcaption>
              </figure>
              <figure>
                <img src={twitter} alt="@Pipotronizer sur Twitter" />
                <figcaption className="twitter">@Pipotronizer</figcaption>
              </figure>
              <h3>Partagez !</h3>
              <div>Share This</div>
            </Col>
            <Col md={4}>
              <h3>Le geste écolo !</h3>
              <p>Si vous souhaitez faire un geste pour l'environnement, vous pouvez vous engager à faire un don. L'argent récolté servira à financer des projets de parcs éoliens.</p>
            </Col>
            <Col md={4}>
              <h3>Contact</h3>
              <p>Pour toute proposition de termes corporate, ou si <span className="highlight">Pipotronizer</span> vous a été utile dans la préparation de vos réunions, vous pouvez envoyer vos commentaires par mail à cette adresse :</p>
              <p><a href="mailto:contact@pipotronizer.com" className="highlight">contact@pipotronizer.com</a></p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
