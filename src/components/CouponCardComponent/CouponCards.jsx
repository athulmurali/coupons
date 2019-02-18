import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import {updateCoupons} from "../../redux/actions/DisplayCouponAction";
import PlusIcon from "../../assets/addNew.svg";
import LogOut_Success from "../../assets/addedNew.svg";

let x =[];

class CouponCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [],
			loadedCouponsCheck: true, 
		}
	}

	swapIcon = (coupon, e) => {
		if(e.target !== e.currentTarget && !!coupon.isLoaded === false) {
			coupon.isLoaded = true;
			x.push(coupon);
			this.setState({values : x});
			localStorage.setItem("LoadedCoupons", this.state.values);
		}
	}
	render() {
		let coupons = this.props.allCoupons
		let couponsLength = coupons.length;
		this.props.updateCoupons({"searchedCouponsLength": couponsLength});

		if(couponsLength === 0) {
			return <div> No Coupons Found </div>;
		}
		
		return coupons.map((coupon,i)=><div className="Cards" key={i}>
				<Flippy flipOnHover={false} // default false
					flipOnClick={true} // default false
					flipOnHover={false} // default false
					// isFlipped = {this.state.flipcheck}
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
					style={{
						width: "260px",
						height: "343px",
						padding: "30",
					}}>
					<BackSide 
					style={{
						backgroundColor: "white",
						color: "black",
						width: "260px",
						height: "399px",
					}} >
						{/* <h6 className="couponDescription"> {coupon.Description}</h6> */}
					</BackSide>
					<FrontSide 
										// ref = {el => this.flippy.toggle = el}
										style={{
						width: "260px",
						height: "399px",
					}}>
						<img src={coupon.url} width="80px" height="100px" alt="image_image" />
						<h5> {coupon.name}</h5> 
						<h6 className="couponDescription"> {coupon.description} </h6>
						<h6 className="expireDate"> Exp: {coupon.expirationDate.slice(0,10)} </h6>
						<h6 className="viewMore"> View more </h6>
					</FrontSide>
				</Flippy>
				<div className= "plusIcon" onClick={(e) => this.swapIcon(coupon, e)}>
							<img className="addCheck" height="56px" width="56px" src={(coupon.isLoaded) ? LogOut_Success: PlusIcon} alt = "plus sign unable to load"/>	
						</div>
			</div>);

	}
}


const mapStateToProps=(state)=>{
	return {
		allCoupons :state.DisplayCouponsReducer.allCoupons,
		LoadedCouponsTrigger: state.DisplayCouponsReducer.LoadedCouponsTrigger,

	};
};

const mapDispatchToProps = (dispatch) => ({
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue )
}
);
 
export default connect(mapStateToProps,mapDispatchToProps)(CouponCards);

