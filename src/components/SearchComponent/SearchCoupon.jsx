import React from "react";
import {connect} from "react-redux";
import Search_Icon from "../../assets/new-filter-search.png";
import {displayCouponState} from "../../redux/actions/DisplayCouponAction";

class SearchCouponByName extends React.Component {

	inputChange = (e) => {
		this.props.displayCouponState({searchedCouponName : e.target.value});
	}

	render(){

		return(
			<div className="CouponSearch">
				<div className="SearchBarImage">
					<img className="SearchImage" src={Search_Icon} alt ="image not found" />
					<input type="text" className = "SearchBar" placeholder="Search"
						onChange ={this.inputChange}
						// onClick={this.timerReset}
					/>
				</div> 
				<h4 className="LoadedCouponCount"> Available Coupons ('couponsLength') </h4>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		data : state.UserIdentification.couponDetails,
		dataCopy: state.UserIdentification.couponDetailsSearchedCopy,
	};
};

const mapDispatchToProps = (dispatch) => (
	{
		displayCouponState : (updatedValue) => displayCouponState(dispatch, updatedValue),
	}

);

export default connect(mapStateToProps, mapDispatchToProps)(SearchCouponByName);