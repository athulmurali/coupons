import React from "react";
import {updateSort} from "../../redux/actions/SearchSortFilter";
import {connect} from "react-redux";
import {SORT_CATEGORIES} from "../../config/config";


class SortComponent extends React.Component{

	constructor(props){
		super(props);
		this.state={
			sort_arrow: false,

			selectedIndex : 0
		}
		this.Sort_up = require('../../assets/new-filter-arrow-down.svg');

	}
	Sort = () => {
        if(!!this.state.sort_arrow){
			this.setState({sort_arrow : false});
			this.Sort_up = require('../../assets/new-filter-arrow-down.svg');
        }
        else{
        	this.setState({sort_arrow : true});
			this.Sort_up = require('../../assets/new-filter-arrow-up.svg');
        }
	}
	updateChange = ( sortBy, sortOrder,displayName) =>{
		this.props.updateSort({sortBy,sortOrder,displayName})

	}

	render(){
		const slideArrow_Sort = [
            this.Sort_up
        ];
		return (
			<div onClick={this.props.timerReset}> 
				<div className="filter_sort">
					Sort
					<img className="image_arrow" alt="Sort expansion filter" src={slideArrow_Sort[0]}  onClick={this.Sort}/>
					<div className="filter_sort_list" hidden= {this.state.sort_arrow} >{this.props.selectedSortOption.displayName}</div>
				</div>
				{SORT_CATEGORIES.map( (category,index )=> <div key={index} className="filter_inside" hidden= {!this.state.sort_arrow}>
					<label className="SortFilterContainer"> {category.displayName}
  						<input type="radio"  name="radio" onClick={() => this.updateChange(category.sortBy,category.sortOrder, category.displayName)}
							   checked={this.props.selectedSortOption.displayName === category.displayName }/>
  						<span className="checkmark"></span>
					</label>
				</div>)}
			</div>	
			
	
		)
	}
}
const mapStateToProps = (state) =>({
	selectedSortOption :state.SearchSortFilterReducer.sort
})
const mapDispatcherToProps = (dispatch) => {
	return {

		updateSort:(sortParams)=>{updateSort(dispatch, sortParams) }
	}

}


export default connect(mapStateToProps,mapDispatcherToProps)(SortComponent);