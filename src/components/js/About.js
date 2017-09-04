import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>Qu'est-ce que c'est&#8239;?</h2>
        <Grid>
          <Row>
            <Col xs={12}>
              <p><strong>Pipotronizer</strong> est un générateur pseudo-aléatoire de phrases corporate qui ne veulent rien dire, mais dont l'utilisation s'avère bien souvent indispensable en réunion.</p>
              <p>Digne héritier des légendaires <strong><a href="http://bluepsi.free.fr/cybertechno/pipotron/pipotron.html" target="_blank" rel="noopener noreferrer">Pipotron</a></strong> et <strong><a href="http://pipotronic.com/" target="_blank" rel="noopener noreferrer">Pipotronic</a></strong> qui ont inspiré vos collaborateurs et alimenté des milliers de PowerPoint, ce générateur dernier cri vous propose de brasser du vent de manière durable avec un lexique fumeux d'une richesse inégalée.</p>
              <p>Grâce à <strong>Pipotronizer</strong>, vous allez enfin pouvoir concilier votre conscience écologique avec vos impératifs professionnels. En effet, à chaque fois que vous générez une nouvelle phrase, et en fonction de la force du vent, vous constituez une cagnotte virtuelle que vous pouvez ensuite transformer en don. L'argent ainsi récolté sera utilisé pour financer la construction d'éoliennes.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
