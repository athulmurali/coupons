import React, { Component } from 'react';
import './AttractLoop.css';
import { Slide } from 'react-slideshow-image';
import ScanBarcode from '../components/ScanBarcode/ScanBarcode';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import slideDuration from '../config/config';


class AttractLoop extends Component {
  handleScreenTap = () => {
    this.props.history.push(`/userIdentification`);
  };

  render() {
    const Image_coupon = require('../assets/Attract-loop-image.png');

    const slideImages = [
      Image_coupon,
      Image_coupon,
      Image_coupon,
    ];

    const slide_properties = {
      duration: slideDuration.duration,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false,
    }

    return (
      <div className="AttractLoop" onClick={this.handleScreenTap}>
        <Header />
        <Slide {...slide_properties} className="couponScreenBackground">
          <div className="each-slide">
            <div className="couponImageCover" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div className="couponImageCover" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div className="couponImageCover" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            </div>
          </div>
        </Slide>
        <div id="one" className="screen">
          <div className="container">
            <span className="tapAnywhere">Tap anywhere to start</span>
          </div>
        </div>
        <ScanBarcode />
      </div>
    );
  }
}

export default AttractLoop;

AttractLoop.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
