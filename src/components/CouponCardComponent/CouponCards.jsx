import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";

import StopAndShopImg from "../../assets/stopandshop.png";


class CouponCards extends React.Component {
	render() {
		let coupons = this.props.data[1];
		if(this.props.dataCopy.length > 0 ){
			coupons = this.props.dataCopy;
		}

		if(coupons.length > 0){

			return coupons.map((coupon,i)=><div className="Cards" key={i}>
				<Flippy flipOnHover={false} // default false
					flipOnClick={true} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
					style={{
						width: "170px",
						height: "150px",
						padding: "0",
					}}>
					<BackSide style={{
						backgroundColor: "white",
						color: "black",
						width: "171px",
						height: "264px",
					}} >
					</BackSide>
					<FrontSide style={{
						width: "171px",
						height: "264px"
					}}>
						<img src={StopAndShopImg} width="103px" height="103px" alt="image_image" /> <br />
						<h5> {coupon.Name}</h5>
						<h6 className="couponDescription"> {coupon.Description}</h6>
						<h6> Exp: {coupon.EndDate.slice(0,10)} </h6>
						<h6 className="viewMore"> Tap to View more </h6>
					</FrontSide>
				</Flippy>
			</div>);
		}


	}
}


const mapStateToProps=(state)=>{
	return {
		data : state.UserIdentification.couponDetails,
		dataCopy: state.UserIdentification.couponDetailsSearchedCopy
	};
};

// const mapDispatchToProps = (dispatch) => ({
// 	displayCouponState : (updatedValue) => displayCouponState(dispatch, updatedValue)
// }
// )
 
export default connect(mapStateToProps,null)(CouponCards);

