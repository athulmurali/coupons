import React from "react";
import {SORT_ODERS} from "../../redux/constants";
import {updateSort} from "../../redux/actions/SearchSortFilter";
import {connect} from "react-redux";

const SORT_CATEOGRY = [
	{
		displayName : 'Redeem By Date',
		sortBy      : 'expirationDate',
		sortOrder   : SORT_ODERS.ASC
	},
	{
		displayName : 'Value(Low to High)',
		sortBy      : 'expirationDate',
		sortOrder   : SORT_ODERS.ASC
	},
	{
		displayName : 'Value(High to Low)',
		sortBy      : 'expirationDate',
		sortOrder   : SORT_ODERS.DESC
	},
	{
		displayName : 'Brand',
		sortBy      : 'name',
		sortOrder   : SORT_ODERS.ASC
	},

];

class SortComponent extends React.Component{

	constructor(props){
		super(props);
		this.state={
			sort_arrow: false,

			selectedIndex : 0
		}
		this.Sort_up = require('../../assets/new-filter-arrow-up.svg');

	}
	Sort = () => {
        if(this.state.sort_arrow === false){
            this.setState({sort_arrow : true});
            this.Sort_up = require('../../assets/new-filter-arrow-down.svg');
        }
        else{
            this.setState({sort_arrow : false});
            this.Sort_up = require('../../assets/new-filter-arrow-up.svg');
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
			<div>
				<div className="filter_sort">
					Sort
					<img className="image_arrow" src={slideArrow_Sort[0]}  onClick={this.Sort}/>
					<div className="filter_sort_list" hidden= {this.state.sort_arrow} >By Recommended</div>
				</div>
				{SORT_CATEOGRY.map( category => <div key={category.displayName} className="filter_inside" hidden= {!this.state.sort_arrow}>
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