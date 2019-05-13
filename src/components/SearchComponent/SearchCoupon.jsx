import React from "react";
import {connect} from "react-redux";
import Search_Icon from "../../assets/new-filter-search.png";
import {updateSearch} from "../../redux/actions/SearchSortFilter";

class SearchCoupon extends React.Component {

	inputChange = (e) => this.props.updateSearchParams({searchString: e.target.value});

	render() {
		return  <div className="CouponSearch">
					<div className="SearchBarImage">
						<img className="SearchImage" src={Search_Icon} alt="Search icon not found"/>
						<input type="text" className="SearchBar" placeholder="Search"
							   onChange={this.inputChange}
						/>
					</div>
					<h4 className="LoadedCouponCount"> Available Coupons ({this.props.couponsLength}) </h4>
				</div>

	}
}



const mapDispatchToProps = (dispatch) => (
	{
		updateSearchParams: (searchParams) => updateSearch(dispatch, searchParams),
	}

);

export default connect(_=>({}), mapDispatchToProps)(SearchCoupon);
