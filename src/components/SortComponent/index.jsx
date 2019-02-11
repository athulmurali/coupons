import React from "react";
import {connect} from "react-redux";
import image_sort_up from "../../assets/new-filter-arrow-up.svg";
import image_sort_down from "../../assets/new-filter-arrow-down.svg";
const SORT_CATEOGRY = ["Redeem By Date"	,"Value(Low to High)	","Value(High to Low)"	," Brand"];

class SortComponent extends React.Component{

	constructor(props){
		super(props);
		this.state={
			sort_arrow: false,
			checkedArray : []
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
	updateChange = (checkedArray, categoryName) =>{
		if(checkedArray.includes(categoryName)){
			this.setState({checkedArray : checkedArray.filter(name=>(name!=categoryName))})
		}
		else{
			this.setState({checkedArray : [...this.state.checkedArray,categoryName ] })
		}

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
				{SORT_CATEOGRY.map( category => <div key={category} className="filter_inside" hidden= {!this.state.sort_arrow}>
					<input name="_filter" type="checkbox" 
					onClick={() => this.updateChange(this.state.checkedArray,category)} />
					<label>
						{category}
					</label>
				</div>)}
			</div>	
			
	
		)
	}
}
const mapStateToProps = (state) => {
	return { 
		checkedArray : state.SortFilterReducer.checkedArray ,
		SORT_CATEOGRY : state.SortFilterReducer.sortCategory 

	}
}
const mapDispatcherToProps = (dispatch) => {

}


export default connect(mapStateToProps,mapDispatcherToProps)(SortComponent);