import React from 'react';
import Header from '../components/Header';
import './DisplayCoupons.css';
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
class Coupons extends React.Component {
    render() {
      var indents = [];
      const Image_coupon = require('../assets/Attract-loop-image.png');
      let incidentsLength = 18;
      for (var i = 0; i < incidentsLength; i++) {
        indents.push( < div className = "Cards" key = {i}>
          <Flippy flipOnHover = {false} // default false
          flipOnClick = {true} // default false
          flipDirection = "horizontal" // horizontal or vertical
          ref = {(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
          style = {
            {
              width: '170px',
              height: '150px',
              padding: '0',
            }}>
          <FrontSide style = {{
            width:"171px",
            height: "264px"       }}>
          <img src = {Image_coupon} width = "103px"  height = "103px" alt = "image" / > <br />
          <h4> OFFER 50% </h4>
          <h5> Product Name or Brand </h5>
          <h6> Some description <br/> description description</h6>
          <h6> Exp: MM/DD/YYYY </h6>

          </FrontSide>
          <BackSide style = {
            {
              backgroundColor: '#175852',
              color: 'white',
              width:"171px",
              height: "264px",
            }
          } >Category {i} <br /> Aisle {i}
          </BackSide>
          </Flippy>
          </div>);
        }

        return ( <div>
          <div className="WelcomeUser_Logout">
          <h2 className="userName"> Welcome Anne! </h2>
          <button className="logoutButton"> Exit </button>
          </div>
          <Header />
          <div className="printDiv">
          <button className="printButton"> PRINT </button>
          </div>
          <div className = "AllCoupons">
          <ul>
          <li> < a href = "#news" > New Coupons < /a></li >
          <li> < a class = "active" href = "#displayCoupons" > Loaded Coupons < /a></li >
          </ul>
          <div class = "LoadedCoupons" >
          <h4 className="LoadedCouponCount"> Loaded Coupons ({incidentsLength}) </h4>
          {indents}
          </div>
          </div>
          </div>
        );
      }
    }

    export default Coupons;
