import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>Qu'est-ce que c'est ?</h2>
        <Grid>
          <Row>
            <Col xs={12}>
              <p><span className="highlight">Pipotronizer</span> est un générateur de phrases corporate qui ne veulent rien dire, mais dont l'utilisation s'avère bien souvent indispensable en réunion.</p>
              <p>Digne héritier des légendaires <span className="highlight">Pipotron</span> et <span className="highlight">Pipotronic</span> qui ont inspiré vos collaborateurs et alimenté des milliers de PowerPoint, <span className="highlight">Pipotronizer</span> vous propose de brasser du vent de manière durable avec un lexique fumeux d'une richesse inégalée.</p>
              <p>Grâce à <span className="highlight">Pipotronizer</span>, vous pouvez enfin concilier votre conscience écologique avec vos impératifs professionnels. En effet, chaque fois que vous générez une nouvelle phrase, vous constituez une cagnotte virtuelle que vous pouvez ensuite transformer en don. L'argent ainsi récolté sera utilisé pour financer la construction d'éoliennes.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
