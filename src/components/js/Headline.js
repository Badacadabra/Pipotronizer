import React, { Component } from 'react';
import '../style/Headline.css';

class Headline extends Component {
  render() {
    return (
      <h1 className="headline earth">
        Brassez du vent avec <span className="highlight">Pipotronizer</span> !
      </h1>
    );
  }
}

export default Headline;
