import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AttractLoop.css';
import { Slide } from 'react-slideshow-image';
import ScanBarcode from '../ScanBarcode/ScanBarcode';
import Header from '../HeaderComponent/Header';
import Config from '../../config/config';
import CameraScanner from '../../components/CameraScannerComponent/CameraScanner';


class AttractLoop extends Component {
	constructor(props){
		super(props);
		const isPortrait = window.matchMedia('(orientation: portrait)').matches;
		this.state = {
			scanning: false,
			isPortrait,
      results: [
        // {
        //   codeResult: {
        //     code: '123ABCabc'
        //   }
        // }
      ]
		}
		window.addEventListener('orientationchange', this.orientationChange);
  
	}
	orientationChange = () =>{
		this.setState({
      isPortrait: !window.matchMedia('(orientation: portrait)').matches,
    });
	}
  handleScreenTap = () => {
    this.props.history.push(`/userIdentification`);
	};
	

  render() {
		
    const Image_coupon1 = require('../../assets/coupons-attract-Images-03.png');
    const Image_coupon2 = require('../../assets/coupons-attract-Images-04.png');
    const Image_coupon3 = require('../../assets/coupons-attract-Images-05.png');

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

		Config.loggedIn = false;
		
		
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
				<ScanBarcode history= {this.props.history}/>
				<CameraScanner history={this.props.history}></CameraScanner>
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
