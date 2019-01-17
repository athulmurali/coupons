import React, { Component } from 'react';
import './AttractLoop.css';
import '../assets/Barcode.png';
import { Slide } from 'react-slideshow-image';
import PropTypes from 'prop-types';
import slideDuration from '../config/config';


class AttractLoop extends Component {

  handleScreenTap = () => {
    this.props.history.push(`/userIdentification`);
  };

  render() {
    const Barcode_Image = require('../assets/Barcode.png');
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
        <header className="AttractLoop-Header">
          <h1> Savings & Coupons</h1>
        </header>
          <Slide {...slide_properties} className="couponScreenBackground">
                <div className="each-slide">
                  <div className="couponImageCover" style={{'backgroundImage': `url(${slideImages[0]})`}}>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="couponImageCover" style={{'backgroundImage': `url(${slideImages[1]})`}}>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="couponImageCover" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                  </div>
                </div>
        </Slide>

        <div id="one" className="screen">
            <div className="container">
                <span>Tap anywhere to start</span>
            </div>
        </div>
        <div className="barcodeImage">
          <h3> Scan card to start </h3>
          <img src={Barcode_Image} height="100px" alt="Barcode"/>
        </div>
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
