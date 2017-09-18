// @flow
import React, { Component } from 'react';
import '../style/Header.css';
import blueLandscape from '../../images/blue-landscape.png';
import grayLandscape from '../../images/gray-landscape.png';
import post from '../../images/post.png';
import blades from '../../images/blades.png';
import cloud from '../../images/cloud.png';
import sign from '../../images/sign.png';

type Props = {
  level: string
};

class Header extends Component<Props, null> {
  displayInfo(): {
      background: string,
      description: string,
      strength: string,
      speed: string,
      rotationTime: string,
      cloudBrightness: number
    } {
    let info: Object = {};
    switch (this.props.level) {
      case 'junior':
        info.background = blueLandscape;
        info.description = 'Bonne brise';
        info.strength = 'Force 5';
        info.speed = '35 km/h';
        info.rotationTime = '3s';
        info.cloudBrightness = -1; // only useful to avoid a bug with flow
        break;
      case 'confirmé':
        info.background = blueLandscape;
        info.description = 'Coup de vent';
        info.strength = 'Force 8';
        info.speed = '65 km/h';
        info.rotationTime = '1.5s';
        info.cloudBrightness = 1;
        break;
      case 'senior':
        info.background = grayLandscape;
        info.description = 'Tempête';
        info.strength = 'Force 10';
        info.speed = '90 km/h';
        info.rotationTime = '1s';
        info.cloudBrightness = 0.3;
        break;
      default:
        throw new Error('Unknown level!');
    }
    return info;
  }

  render() {
    let info: {
      background: string,
      description: string,
      strength: string,
      speed: string,
      rotationTime: string,
      cloudBrightness: number
    } = this.displayInfo();

    let animate: {
      animation: string
    } = {
      animation: `rotation ${info.rotationTime} linear infinite`
    };

    let sky: {
      backgroundImage: string
    } = {
      backgroundImage: `url('${info.background}')`
    };

    let brightness: {
      filter: string
    } = {
      filter: `brightness(${info.cloudBrightness})`
    };

    let clouds: Object;

    if (this.props.level !== 'junior') {
      clouds = (
        <div className="clouds">
          <img src={cloud} alt="Nuage" style={brightness} />
          <img src={cloud} alt="Nuage" style={brightness} />
          <img src={cloud} alt="Nuage" style={brightness} />
          <img src={cloud} alt="Nuage" style={brightness} />
        </div>
      );
    }

    return (
      <header style={sky}>
        <div className="turbines">
          <figure>
            <img src={post} alt="Poteau" />
            <img src={blades} alt="Pales" style={animate} />
          </figure>
          <figure>
            <img src={post} alt="Poteau" />
            <img src={blades} alt="Pales" style={animate} />
          </figure>
          <figure>
            <img src={post} alt="Poteau" />
            <img src={blades} alt="Pales" style={animate} />
          </figure>
        </div>
        {clouds}
        <div className="sign">
          <img src={sign} alt="Pancarte" />
          <div className="info">
            <p>{info.description}</p>
            <p>{info.strength}</p>
            <p>{info.speed}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
