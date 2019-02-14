import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import StopAndShopImg from "../../assets/stopandshop.png";
import {updateCoupons} from "../../redux/actions/UserIdentification";
import {displayCouponState} from "../../redux/actions/DisplayCouponAction";
import PlusIcon from "../../assets/plus-icon.svg";
import LogOut_Success from "../../assets/success.svg";
let x =[0];

class CouponCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valuess: [0],
		}
	}

	swapIcon = (i) => {
		if(i.isLoaded === true) {
		i.isLoaded = false;
		}
		else {
			i.isLoaded = true;
		}
		x.push(i);
		this.setState({valuess : x});
		console.log("helllpp "  + i.isLoaded);
	}



	render() {
		let coupons = this.props.data[1];
		let searchedCouponName = this.props.searchedCouponName;
		let couponsLength =  coupons.length;
		let searchedCoupons = this.props.searchedCoupons;
		if(searchedCouponName !== "" && searchedCouponName.length > 2)  {
			searchedCoupons = coupons.filter(function(couponName){
				return couponName.Name.toLowerCase().includes(searchedCouponName.toLowerCase());
			});
			coupons = searchedCoupons;
			couponsLength = searchedCoupons.length;
			this.props.displayCouponState({"searchedCouponsLength": couponsLength});
		}
		else {
			this.props.displayCouponState({"searchedCouponsLength": couponsLength});
		}

		if(couponsLength === 0) {
			return <div> No Coupons Found </div>;
		}


		if(coupons.length > 0 ){
			return coupons.map((coupon,i)=><div className="Cards" key={i}>
				<Flippy flipOnHover={false} // default false
					flipOnClick={false} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
					style={{
						width: "260px",
						height: "343px",
						padding: "30",
					}}>
					<BackSide style={{
						backgroundColor: "white",
						color: "black",
						width: "260px",
						height: "343px",
					}} >
						<h6 className="couponDescription"> {coupon.Description}</h6>
					</BackSide>
					<FrontSide style={{
						width: "260px",
						height: "343px",
					}}>
						<img src={StopAndShopImg} width="80px" height="100px" alt="image_image" />
						<h5> {coupon.Name}</h5> 
						<h6 className="couponDescription"> {coupon.Description} </h6>
						<h6 className="expireDate"> Exp: {coupon.EndDate.slice(0,10)} </h6>
						<h6 className="viewMore"> View more </h6>
						<div className= "plusIcon" onClick = {() => this.swapIcon(coupon)}>
						<img height="66px" width="66px" src={(coupon.isLoaded) ? LogOut_Success: PlusIcon} alt="plus sign unable to load"/>	
						</div>
					</FrontSide>
				</Flippy>
			</div>);
		}
	}

}


const mapStateToProps=(state)=>{
	return {
		data : state.UserIdentification.couponDetails,
		dataCopy: state.UserIdentification.couponDetailsSearchedCopy,
		searchedCouponName: state.DisplayCouponStateUpdate.searchedCouponName,
		searchedCoupons : state.UserIdentification.searchedCoupons,
		couponsLength : state.DisplayCouponStateUpdate.searchedCouponsLength
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue ),
	displayCouponState : (updatedValue) => displayCouponState(dispatch, updatedValue),

}
);
 
export default connect(mapStateToProps,mapDispatchToProps)(CouponCards);

