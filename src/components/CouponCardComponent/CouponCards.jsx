import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import displayCouponState from "../../actions/displayCouponActions";


class CouponCards extends React.Component {

	constructor(props){
		super();
		this.state = {props};
	}



	render() {
		const Image_coupon = require("../../assets/stopandshop.png");
		let userCoupons = [];
		let couponsLength = this.props.data[1].length;
		let searchedCoupons =[];

		if(this.props.dataCopy.length > 0 ){
			searchedCoupons = this.props.dataCopy;
			debugger;
		}

		if(couponsLength > 0){
			searchedCoupons = this.props.data[1];
			for (var i = 0; i < couponsLength; i++) {
				userCoupons.push(
					<div className="Cards" key={i}>
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
								{/* <h3 className="couponDescription">{searchedCoupons[i].Description}</h3> */}
							</BackSide>
							<FrontSide style={{
								width: "171px",
								height: "264px"
							}}>
								<img src={Image_coupon} width="103px" height="103px" alt="image_image" /> <br />
								<h5> {searchedCoupons[i].Name}</h5>
								<h6 className="couponDescription"> {searchedCoupons[i].Description}</h6>
								<h6> Exp: {searchedCoupons[i].EndDate.slice(0,10)} </h6>
								<h6 className="viewMore"> Tap to View more </h6>
							</FrontSide>
						</Flippy>
					</div>);
			}	
		}

		return(
			<div>{userCoupons}</div>
		);
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

