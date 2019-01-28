import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AttractLoop.css';
import { Slide } from 'react-slideshow-image';
import ScanBarcode from '../components/ScanBarcode/ScanBarcode';
import Header from '../components/Header';
import Config from '../config/config';


class AttractLoop extends React.Component {
  
  handleScreenTap = () => {
    this.props.history.push(`/userIdentification`);
  };

  render() {
    const Image_coupon1 = require('../assets/coupons-attract-Images-03.png');
    const Image_coupon2 = require('../assets/coupons-attract-Images-04.png');
    const Image_coupon3 = require('../assets/coupons-attract-Images-05.png');


    const slideImages = [
      Image_coupon1,
      Image_coupon2,
      Image_coupon3,
    ];
    
    const slide_properties = {
      duration: Config.ATTRACT_LOOP_SLIDE_DURATION,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false,
    }

    return (
      <div className="AttractLoop" onClick={this.handleScreenTap}>
        <Header />
        <Slide {...slide_properties} className="couponScreenBackground">
          <div className="each_slide">
            <div className="couponImageCover" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            </div>
          </div>
          <div className="each_slide">
            <div className="couponImageCover" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            </div>
          </div>
          <div className="each_slide">
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
