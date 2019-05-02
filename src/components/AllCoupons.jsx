import React from "react";

export default class AllCoupons extends React.Component{
	render(){
		return(
			<React.Fragment>
				<div className="AllCoupons">
					{this.props.children}
				</div>
			</React.Fragment>
		);
	}
}
