import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/Levels.css';
import windmill1 from '../../images/windmill-1.png';
import windmill2 from '../../images/windmill-2.png';
import windmill3 from '../../images/windmill-3.png';

class Levels extends Component {
  render() {
    return (
      <div className="levels">
        <h2>Contrôlez la force du vent !</h2>
        <Grid>
          <Row>
            <Col md={4}>
              <figure id="intern">
                <img src={windmill1} alt="Bonne brise" />
                <figcaption>Le stagiaire n'a pas dit son dernier mot !</figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure id="manager">
                <img src={windmill2} alt="Coup de vent" />
                <figcaption>Réveillez le manager qui est en vous !</figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure id="consultant">
                <img src={windmill3} alt="Tempête" />
                <figcaption>Parlez comme un vrai consultant !</figcaption>
              </figure>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Levels;
