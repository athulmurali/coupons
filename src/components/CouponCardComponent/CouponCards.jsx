import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import StopAndShopImg from "../../assets/stopandshop.png";
import {updateCoupons} from "../../redux/actions/UserIdentification";
import {displayCouponState} from "../../redux/actions/DisplayCouponAction";


class CouponCards extends React.Component {
	render() {

		let coupons = this.props.allCoupons
		let couponsLength =  coupons.length;


		 // The following is supposed to be moved to backed

		// if(searchedCouponName !== "")  {

		// 	searchedCoupons = coupons.filter(function(couponName){
		// 		return couponName.Name.toLowerCase().includes(searchedCouponName.toLowerCase());
		// 	});
		// 	coupons = searchedCoupons;
		// 	couponsLength = searchedCoupons.length;
		// 	this.props.displayCouponState({"searchedCouponsLength": couponsLength});
		// }
		// else {
		// 	this.props.displayCouponState({"searchedCouponsLength": couponsLength});
		// }

		if(couponsLength === 0) {
			return <div> No Coupons Found </div>;
		}


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


const mapStateToProps=(state)=>{
	return {

		allCoupons :state.DisplayCouponsReducer.allCoupons
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue ),
	displayCouponState : (updatedValue) => displayCouponState(dispatch, updatedValue),

}
);
 
export default connect(mapStateToProps,mapDispatchToProps)(CouponCards);

