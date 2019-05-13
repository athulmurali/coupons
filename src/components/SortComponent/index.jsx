import React from "react";
import {updateSort} from "../../redux/actions/SearchSortFilter";
import {connect} from "react-redux";
import {SORT_CATEGORIES} from "../../config/config";
import IMG_ARROW_UP from "../../assets/new-filter-arrow-up.svg";
import IMG_ARROW_DOWN from "../../assets/new-filter-arrow-down.svg";

class SortComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isSorterExpanded: false,
		};
	}

	toggleSorter = () => this.setState({isSorterExpanded: !this.state.isSorterExpanded});

	render() {
		return (
			<div>
				<div className="filter_sort" onClick={this.toggleSorter}>
					Sort
					<img className="image_arrow" alt="Sort expansion filter"
						 src={this.state.isSorterExpanded ? IMG_ARROW_UP : IMG_ARROW_DOWN}/>
					<div className="filter_sort_list"
						 hidden={this.state.isSorterExpanded}>{this.props.selectedSortOption.displayName}</div>
				</div>
				{this.state.isSorterExpanded && SORT_CATEGORIES.map((category, index) => <div key={index}
																							  className="filter_inside">
					<label className="SortFilterContainer"> {category.displayName}
						<input type="radio"
							   name="radio"
							   onChange={(e) => {
								   this.props.updateSort(category);
							   }}
							   checked={this.props.selectedSortOption.displayName === category.displayName}/>
						<span className="checkmark"/>
					</label>
				</div>)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	selectedSortOption: state.SearchSortFilterReducer.sort
});
const mapDispatcherToProps = (dispatch) => {
	return {
		updateSort: (sortParams) => {
			updateSort(dispatch, sortParams);
		},
	};

};


export default connect(mapStateToProps, mapDispatcherToProps)(SortComponent);
