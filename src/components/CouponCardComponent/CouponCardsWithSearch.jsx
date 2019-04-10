import React from "react";
import {connect} from "react-redux";
import {SEARCH_FIELD_NAMES, SORT_ORDERS} from "../../config/config";
import conditionalSearch from "../../utils/conditionalSearch";
import {loadCoupon} from "../../redux/actions/LoadCoupon";
import SortByKey from "../../utils/SortByKey";
import SearchCoupon from "../SearchComponent/SearchCoupon";
import "../DisplayCouponComponent/DisplayCoupons.css";
import CouponCardsContainer from "./CouponCardsContainer";


class CouponCardsWithSearch extends React.Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return !(JSON.stringify(this.props) === JSON.stringify(nextProps));
	}

	render() {
		return <div className="LoadedCoupons">
			{!this.props.isLoading && <SearchCoupon couponsLength={this.props.allCoupons.length}/>}
			<div className="flippyCardsContainer">
				<CouponCardsContainer
					isLoading={this.props.isLoading}
					coupons ={this.props.allCoupons}
					inLoadedScreen={this.props.inLoadedScreen}
					loyaltyNumber={this.props.loyaltyNumber}
					loadCoupon={this.props.loadCoupon}
				/>
			</div>
		</div>;
	}
}

const mapStateToProps = (state) => {
	//whenever there is a change in any of reducers, this hook will be fired.

	let toBeSearched = state.SearchSortFilterReducer.toBeSearched;
	let searchText = state.SearchSortFilterReducer.search.searchString;
	let sortOption = state.SearchSortFilterReducer.sort;
	let allCoupons = state.SearchSortFilterReducer.arr;

	allCoupons = toBeSearched ? conditionalSearch(allCoupons, SEARCH_FIELD_NAMES, searchText) : allCoupons;
	allCoupons = SortByKey(allCoupons, sortOption.sortBy, SORT_ORDERS.ASC, sortOption.sortOrder);
	allCoupons = [...allCoupons];
	return {
		allCoupons: allCoupons,
		inLoadedScreen: state.SearchSortFilterReducer.loaded.loaded,
		loyaltyNumber: state.DisplayCouponsReducer.loyaltyNumber,
		isLoading: state.SearchSortFilterReducer.isLoading
	};
};

const mapDispatchToProps = (dispatch) => ({
	loadCoupon: (loyaltyNumber, couponId, couponSource) => loadCoupon(dispatch, loyaltyNumber, couponId, couponSource)
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponCardsWithSearch);
