import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import StopAndShopImg from "../../assets/stopandshop.png";
import {updateCoupons} from "../../redux/actions/DisplayCouponAction";
import {FlippyStyle,BackgroundStyle,FrontSideStyle} from "./CouponCardStyle";


class CouponCards extends React.Component {
	render() {

		let coupons = this.props.allCoupons
		let couponsLength =  coupons.length;

		if(couponsLength === 0) {
			return <div> No Coupons Found </div>;
		}


		return coupons.map((coupon,i)=><div className="Cards" key={i}>
				<Flippy flipOnHover={false} // default false
					flipOnClick={true} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
					style={FlippyStyle}>
					<BackSide style={BackgroundStyle} >
					</BackSide>
					<FrontSide style={FrontSideStyle}>
						<img src={StopAndShopImg} width="103px" height="103px" alt="image_image" /> <br />
						<h5> {coupon.name}</h5>
						<h6 className="couponDescription"> {coupon.description}</h6>
						<h6> Exp: {coupon.expirationDate.slice(0,10)} </h6>
						<h6 className="viewMore"> Tap to View more </h6>
					</FrontSide>
				</Flippy>
			</div>);

	}

}


const mapStateToProps=(state)=>{
	return {

		allCoupons :state.DisplayCouponsReducer.allCoupons
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue )
}
);
 
export default connect(mapStateToProps,mapDispatchToProps)(CouponCards);

