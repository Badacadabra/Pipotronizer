// @flow
import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import '../style/Header.css';
import blueLandscape from '../../images/blue-landscape.png';
import grayLandscape from '../../images/gray-landscape.png';
import post from '../../images/post.png';
import blades from '../../images/blades.png';
import cloud from '../../images/cloud.png';
import sign from '../../images/sign.png';
import birdsOGG from '../../audios/birds.ogg';
import birdsMP3 from '../../audios/birds.mp3';
import windOGG from '../../audios/wind.ogg';
import windMP3 from '../../audios/wind.mp3';
import stormOGG from '../../audios/storm.ogg';
import stormMP3 from '../../audios/storm.mp3';

type Props = {
  level: string
};

type State = {
  soundIcon: string,
  soundVol: string
};

class Header extends Component<Props, State> {
  toggleSound: Function;

  constructor(props: Props) {
    super(props);
    this.state = {
      soundIcon: 'volume-off',
      soundVol: 'muted'
    };
    this.toggleSound = this.toggleSound.bind(this);
  }

  componentWillReceiveProps() {
    this.refs.audio.pause();
    this.refs.audio.load();
    this.refs.audio.play();
  }

  displayInfo(): {
      background: string,
      description: string,
      strength: string,
      speed: string,
      rotationTime: string,
      cloudBrightness: number,
      sound: Object
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
        info.sound = {ogg: birdsOGG, mp3: birdsMP3};
        break;
      case 'confirmé':
        info.background = blueLandscape;
        info.description = 'Coup de vent';
        info.strength = 'Force 8';
        info.speed = '65 km/h';
        info.rotationTime = '1.5s';
        info.cloudBrightness = 1;
        info.sound = {ogg: windOGG, mp3: windMP3};
        break;
      case 'senior':
        info.background = grayLandscape;
        info.description = 'Tempête';
        info.strength = 'Force 10';
        info.speed = '90 km/h';
        info.rotationTime = '1s';
        info.cloudBrightness = 0.3;
        info.sound = {ogg: stormOGG, mp3: stormMP3};
        break;
      default:
        throw new Error('Unknown level!');
    }
    return info;
  }

  toggleSound(): void {
    this.setState({
      soundIcon: this.state.soundIcon === 'volume-off' ? 'volume-up' : 'volume-off',
      soundVol: this.state.soundVol === 'muted' ? '' : 'muted'
    });
  }

  render() {
    let info: {
      background: string,
      description: string,
      strength: string,
      speed: string,
      rotationTime: string,
      cloudBrightness: number,
      sound: Object
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
        <Glyphicon className="sound" glyph={this.state.soundIcon} onClick={this.toggleSound} />
        <audio autoPlay loop muted={this.state.soundVol} ref="audio">
          <source src={info.sound.ogg} type="audio/ogg" />
          <source src={info.sound.mp3} type="audio/mpeg" />
          Votre navigateur ne gère pas l'élément audio.
        </audio>
      </header>
    );
  }
}

export default Header;
