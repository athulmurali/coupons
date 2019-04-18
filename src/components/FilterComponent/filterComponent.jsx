import React from "react";
import {connect} from "react-redux";
import {updateFilters} from "../../redux/actions/SearchSortFilter";

const SelectedFilters = (props) => {
	return <div>
		{props.selectedFilters.length !== 0 ?
			props.selectedFilters.map((filterOption, index) => <div
				style={{display: "inline-block", paddingRight: "3px"}}
				key={index}> {index < props.selectedFilters.length - 1 ? filterOption + "," : filterOption}</div>) :
			"None Selected "}

	</div>;

};

class FilterComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter_arrow: false,
			array_filter: []
		};
		this.Image_up = require("../../assets/new-filter-arrow-down.svg");
	}


	Filter = () => {
		if (this.state.filter_arrow === false) {
			this.setState({filter_arrow: true});
			this.Image_up = require("../../assets/new-filter-arrow-up.svg");
		} else {
			this.setState({filter_arrow: false});
			this.Image_up = require("../../assets/new-filter-arrow-down.svg");
		}
	};


	updateChange = (array_filter, category) => {

		let checkedFilters = array_filter;

		if (array_filter.includes(category)) {
			checkedFilters = array_filter.filter(name => (name !== category));
			this.setState({array_filter: checkedFilters});

		} else {
			checkedFilters = [...this.state.array_filter, category];
			this.setState({array_filter: checkedFilters});
		}

		this.props.updateCheckedFilters({categories: checkedFilters});

	};

	Filter_Category = () => {
		return (
			<div onClick={this.props.timerReset} className="filterContainer">
				{this.props.categoriesAvailable.map((category, index) => 
				<div key={index} className="filter_inside"
							hidden={!this.state.filter_arrow}>
					<label className="filterLabel"> <input name="_filter" type="checkbox" onClick={(_) => this.updateChange(this.state.array_filter, category.displayName)}/>
					{category.displayName} </label>
				</div>)}
			</div>
		);
	};


	render() {
		const slideArrow = [
			this.Image_up
		];
		return (
			<div onClick={this.props.timerReset} >
				<div className="filter_inside" hidden={!this.state.sort_arrow}>
					<input name="_filter" type="checkbox" defaultChecked/>
					<label> Recommended </label>
					<SelectedFilters selectedFilters={[""]}/>
				</div>
				<div className="filter_sort"  onClick={this.Filter}>
					Filter
					<img className="image_arrow" alt="Filter show/hide selector" src={slideArrow[0]}
						/>
					<div className="filter_sort_list" hidden={this.state.filter_arrow}>
						<SelectedFilters selectedFilters={this.state.array_filter}/>
					</div>
				</div>
				
				{this.Filter_Category()}
			</div>
		);
	}
}

export const mapStateToProps = (state) => {
	return {
		categoriesAvailable: state.SearchSortFilterReducer.categoriesAvailable
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		updateCheckedFilters: (filterParams) => updateFilters(dispatch, filterParams)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);