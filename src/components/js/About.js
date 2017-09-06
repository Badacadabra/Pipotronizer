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
              <p><strong>Pipotronizer</strong> est un générateur de phrases corporate qui ne veulent rien dire, mais dont l'utilisation s'avère bien souvent indispensable en réunion. Laissez donc faire le hasard pour impressionner votre N+1 !</p>
              <p>Digne héritier des légendaires <a href="http://bluepsi.free.fr/cybertechno/pipotron/pipotron.html" target="_blank" rel="noopener noreferrer">Pipotron</a> et <a href="http://pipotronic.com/" target="_blank" rel="noopener noreferrer">Pipotronic</a> qui ont inspiré vos collaborateurs et alimenté des milliers de présentations PowerPoint, ce générateur dernier cri vous propose de brasser du vent de manière durable avec un lexique fumeux d'une richesse inégalée.</p>
              <p>Grâce à <strong>Pipotronizer</strong>, vous allez enfin pouvoir concilier votre conscience écologique et solidaire avec vos impératifs professionnels. En effet, à chaque fois que vous générez une nouvelle phrase, et en fonction de la force du vent, vous constituez une cagnotte virtuelle matérialisant votre production d'énergie électrique. Si vous le souhaitez, vous pouvez transformer cette cagnotte en véritable don à l'attention de <a href="https://twitter.com/badacadabra" target="_blank" rel="noopener noreferrer">Badacadabra</a>. L'argent ainsi récolté sera intégralement reversé à <a href="https://www.electriciens-sans-frontieres.org/" target="_blank" rel="noopener noreferrer">Électriciens sans frontières</a> sous forme de don collectif.</p>
              <p>Tous les dons sont évidemment les bienvenus, même s'il ne s'agit que de quelques centimes. Ce serait vraiment dommage de gaspiller de l'énergie&#8239;!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
