import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/Levels.css';
import windmill1 from '../../images/windmill-1.png';
import windmill2 from '../../images/windmill-2.png';
import windmill3 from '../../images/windmill-3.png';
import wheel from '../../images/wheel.png';
import stick from '../../images/stick.png';

class Levels extends Component {
  render() {
    return (
      <div id="levels" className="levels">
        <h2>Contrôlez la force du vent&#8239;!</h2>
        <Grid>
          <Row className="pinwheels">
            <Col md={4}>
              <figure className="intern">
                <img className="wheel" src={wheel} alt="Roue" />
                <img className="stick" src={stick} alt="Bâton" />
              </figure>
            </Col>
            <Col md={4}>
              <figure className="manager">
                <img className="wheel" src={wheel} alt="Roue" />
                <img className="stick" src={stick} alt="Bâton" />
              </figure>
            </Col>
            <Col md={4}>
              <figure className="consultant">
                <img className="wheel" src={wheel} alt="Roue" />
                <img className="stick" src={stick} alt="Bâton" />
              </figure>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row className="windmills">
            <Col md={4}>
              <figure className="intern">
                <img src={windmill1} alt="Bonne brise" />
                <figcaption>
                  Bonne brise pour vous réveiller en douceur&#8239;!
                  <div className="price">(0,10 € par phrase)</div>
                </figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure className="manager">
                <img src={windmill2} alt="Coup de vent" />
                <figcaption>
                  Attention au coup de vent. Ça décoiffe&#8239;!
                  <div className="price">(0,50 € par phrase)</div>
                </figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure className="consultant">
                <img src={windmill3} alt="Tempête" />
                <figcaption>
                  Avis de tempête. Planquez-vous&#8239;!
                  <div className="price">(1 € par phrase)</div>
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Levels;
