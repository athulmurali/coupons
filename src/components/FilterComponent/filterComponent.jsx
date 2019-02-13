import React from "react";

const filter_category = ["Baby & Childcare"	,"Bakeray","Beverages"	,"Condiments & Sauces","Dairy","Deli","Ethnic Products","Frozen Food","General Merchandise"];

export default class SortComponent extends React.Component{
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
	Filter_Category = () => {
        return(
            filter_category.map( fill => <div  key={fill} className="filter_inside" hidden= {!this.state.filter_arrow}>
                <input name="_filter" type="checkbox" onClick={() => this.filtering(fill)}/>
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