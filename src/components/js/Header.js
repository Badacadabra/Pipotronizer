import React, { Component } from 'react';
import '../style/Header.css';
import turbine from '../../images/wind-turbine.png';
import cloud from '../../images/cloud.png';
import sign from '../../images/sign.png';
import post from '../../images/post.png';
import blades from '../../images/blades.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="turbines">
          <figure>
            <img src={post} alt="Poteau" />
            <img src={blades} alt="Pales" />
          </figure>
          <figure>
            <img src={post} alt="Poteau" />
            <img src={blades} alt="Pales" />
          </figure>
          <figure>
            <img src={post} alt="Poteau" />
            <img src={blades} alt="Pales" />
          </figure>
        </div>
        <div className="clouds">
          <img src={cloud} alt="Nuage" />
          <img src={cloud} alt="Nuage" />
          <img src={cloud} alt="Nuage" />
        </div>
        <div className="sign">
          <img src={sign} alt="Pancarte" />
          <div className="info">
            <p>{this.props.situation}</p>
            <p>{this.props.strength}</p>
            <p>{this.props.speed}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
