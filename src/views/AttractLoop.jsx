import React, { Component } from 'react';
import './AttractLoop.css';
import '../assets/Barcode.png';
import { Slide } from 'react-slideshow-image';


class AttractLoop extends Component {
  state = {
      number : 10
    }
  render() {
    const Barcode_Image = require('../assets/Barcode.png');
    const Image_coupon = require('../assets/Attract-loop-image.png');

    const slideImages = [
      Image_coupon,
      Barcode_Image,
      Image_coupon,
    ];

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false
    }

    return (
      <div className="AttractLoop" onClick={() => alert("This should check for user authentication")}>
        <header className="AttractLoop-Header">
          <h1> Savings & Coupons</h1>
        </header>
          <Slide {...properties} className="couponScreenBackground">
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
