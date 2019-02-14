import React from "react";
import {connect} from "react-redux";
import {updateFilters} from "../../redux/actions/SearchSortFilter";

const filter_category = ["Baby & Childcare"	,"Bakeray","Beverages"	,"Condiments & Sauces","Dairy","Deli","Ethnic Products","Frozen Food","General Merchandise"];

class FilterComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			filter_arrow: false,
			array_filter : []
		}
		this.Image_up = require('../../assets/new-filter-arrow-down.svg');
	}
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

		this.updateCheckedFilters({categories :  array_filter})

		let checkedFilters =array_filter


		if(array_filter.includes(category)){
			checkedFilters = array_filter.filter(name => (name!==category))
			this.setState({array_filter :  checkedFilters});

		}
		else{
			checkedFilters = [...this.state.array_filter,category]


			this.setState({array_filter : checkedFilters});
		}

		this.props.updateCheckedFilters({category : checkedFilters})

	}

	Filter_Category = () => {
        return(
            filter_category.map( fill => <div  key={fill} className="filter_inside" hidden= {!this.state.filter_arrow}>
                <input name="_filter" type="checkbox" onClick={(e) => this.updateChange(this.state.array_filter  ,fill)}/>
                <label> {fill} </label>
            </div>)
        )
    }

    filtering = (filtered_category) => {
        this.state.array_filter.push(filtered_category);
    }
	
	render(){
		const slideArrow = [
            this.Image_up
        ];
		return(
			<div>
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


	}
}

export const mapDispatchToProps =(dispatch)=>{
	return {
		updateCheckedFilters :(filterParams)=> updateFilters(dispatch, filterParams)

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)