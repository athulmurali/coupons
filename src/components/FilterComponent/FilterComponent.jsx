import React from "react";
import "../DisplayCouponComponent/DisplayCoupons.css";
import {connect} from "react-redux";
import {updateFilters} from "../../redux/actions/SearchSortFilter";
import PropTypes from "prop-types";

import IMG_UP from "../../assets/new-filter-arrow-up.svg";
import IMG_DOWN from "../../assets/new-filter-arrow-down.svg";

const styles = {
	selectedFilterStatusText: {display: "inline-block", paddingRight: "3px"}
};
const FiltersStatusBar = (props) => {
	return <div>
		{props.selectedFilters.length !== 0 ?
			props.selectedFilters.map((filterOption, index) => <div
				style={styles.selectedFilterStatusText}
				key={index}> {index < props.selectedFilters.length - 1 ? filterOption + "," : filterOption}</div>) :
			"None Selected "}
	</div>;
};

const FilterCategories = (props) => {
	return (
		<div className={props.isExpanded ? "filterContainer" : "filterContainerExpanded"}>
			{props.categoriesAvailable.map((category, index) =>
				<div key={index} className="filter_inside" hidden={!props.isExpanded}>
					<label className="filterLabel">
						<input
							name="filter"
							type="checkbox"
							onClick={_ => props.selectFilter(props.selectedFilterNames, category.displayName)}
						/>
						{category.displayName}
					</label>
				</div>)}
		</div>
	);
};
FilterCategories.propTypes = {
	isExpanded: PropTypes.bool.isRequired,
	categoriesAvailable: PropTypes.arrayOf(Object).isRequired,
	selectedFilterNames: PropTypes.arrayOf(Object).isRequired,
	selectFilter: PropTypes.func.isRequired
};


const initialState = {isExpanded: false, selectedFilterNames: []};

class FilterComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...initialState};
	}

	toggleFilterExpansion = () => this.setState({isExpanded: !this.state.isExpanded});

	handleClickFilter = (selectedFilterNames, category) => {

		let checkedFilters = selectedFilterNames;

		if (selectedFilterNames.includes(category)) {
			checkedFilters = selectedFilterNames.filter(name => (name !== category));
			this.setState({selectedFilterNames: checkedFilters});

		} else {
			checkedFilters = [...this.state.selectedFilterNames, category];
			this.setState({selectedFilterNames: checkedFilters});
		}

		this.props.updateSelectedFilters({categories: checkedFilters});
	};

	render() {
		return (
			<div>
				<div className="filter_sort" onClick={this.toggleFilterExpansion}>
					Filter
					<img className="image_arrow"
						 alt="Filter show/hide selector"
						 src={this.state.isExpanded ? IMG_UP : IMG_DOWN}/>
					<div className="filter_sort_list" hidden={this.state.isExpanded}>
						<FiltersStatusBar selectedFilters={this.state.selectedFilterNames}/>
					</div>
				</div>
				<FilterCategories
					isExpanded={this.state.isExpanded}
					categoriesAvailable={this.props.categoriesAvailable}
					selectedFilterNames={this.state.selectedFilterNames}
					selectFilter={this.handleClickFilter}
				/>
			</div>
		);
	}
}

export const mapStateToProps = (state) => {
	return {
		categoriesAvailable: state.SearchSortFilterReducer.categoriesAvailable,
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		updateSelectedFilters: (filterParams) => updateFilters(dispatch, filterParams)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
