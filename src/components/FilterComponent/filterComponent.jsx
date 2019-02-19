import React from "react";
import {connect} from "react-redux";
import {updateFilters} from "../../redux/actions/SearchSortFilter";


class FilterComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			filter_arrow: false,
			array_filter : []
		}
		this.Image_up = require('../../assets/new-filter-arrow-down.svg');
	}


	componentWillMount() {}


	Filter = () => {
        if(this.state.filter_arrow === false){
            this.setState({filter_arrow : true});
            this.Image_up = require('../../assets/new-filter-arrow-up.svg');
        }
        else{
            this.setState({filter_arrow : false});
            this.Image_up = require('../../assets/new-filter-arrow-down.svg');
        }
	}


	updateChange = (array_filter,category) => {

		let checkedFilters =array_filter
		

		if(array_filter.includes(category)){
			checkedFilters = array_filter.filter(name => (name!==category))
			this.setState({array_filter :  checkedFilters});

		}
		else{
			checkedFilters = [...this.state.array_filter,category]


			this.setState({array_filter : checkedFilters});
		}

		this.props.updateCheckedFilters({filterByCategory : checkedFilters})

	}

	Filter_Category = () => {
        return(
					<div onClick={this.props.timerReset}>
			{this.props.categoriesAvailable.map((category,index) => <div key={index} className="filter_inside"
																	  hidden= {!this.state.filter_arrow}>
                <input name="_filter" type="checkbox" onClick={(_) => this.updateChange(this.state.array_filter  ,category.displayName)}/>
                <label > {category.displayName} </label>
            </div>)}
						</div>
						)
    }

	
	render(){
		const slideArrow = [
            this.Image_up
        ];
		return(
			<div onClick={this.props.timerReset}>
				<div className="filter_inside" hidden= {!this.state.sort_arrow}>
					<input name="_filter" type="checkbox" defaultChecked/>
						<label> Recommended </label>
				</div>
				<div className="filter_sort">
					Filter
					<img className="image_arrow" src={slideArrow[0]}  onClick={this.Filter}/>
					<div className="filter_sort_list" hidden= {this.state.filter_arrow} >No filter added</div>
				</div>
				{ this.Filter_Category() }
			</div>
		)
	}
}
export const mapStateToProps =(state) =>{
	return {

		// array_filter : state.UserIdentification.array_filter

		categoriesAvailable : state.SearchSortFilterReducer.categoriesAvailable


	}
}

export const mapDispatchToProps =(dispatch)=>{
	return {
		updateCheckedFilters :(filterParams)=> updateFilters(dispatch, filterParams)
		// getCategories : _=>getCategories(dispatch,)

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)