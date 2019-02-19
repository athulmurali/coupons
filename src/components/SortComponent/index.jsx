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
        if(this.state.sort_arrow === false){
						this.setState({sort_arrow : true});
						this.Sort_up = require('../../assets/new-filter-arrow-up.svg');
        }
        else{
            this.setState({sort_arrow : false});
						this.Sort_up = require('../../assets/new-filter-arrow-down.svg');
        }
	}
	updateChange = ( sortBy, sortOrder) =>{
		this.props.updateSort({sortBy,sortOrder})

	}

	render(){
		const slideArrow_Sort = [
            this.Sort_up
        ];
		return (
			<div onClick={this.props.timerReset}> 
				<div className="filter_sort">
					Sort
					<img className="image_arrow" src={slideArrow_Sort[0]}  onClick={this.Sort}/>
					<div className="filter_sort_list" hidden= {this.state.sort_arrow} >By Recommended</div>
				</div>
				{SORT_CATEGORIES.map( category => <div key={category.displayName} className="filter_inside" hidden= {!this.state.sort_arrow}>
					<input name="_filter" type="radio"
					onClick={() => this.updateChange(category.sortBy,category.sortOrder)} />
					<label>
						{category.displayName}
					</label>
				</div>)}
			</div>	
			
	
		)
	}
}
const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatcherToProps = (dispatch) => {
	return {

		updateSort:(sortParams)=>{updateSort(dispatch, sortParams) }
	}

}


export default connect(mapStateToProps,mapDispatcherToProps)(SortComponent);