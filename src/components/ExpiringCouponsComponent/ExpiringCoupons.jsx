import React from "react";
import styled from "styled-components";
import "./ExpiringCoupons.css";
import PropTypes from "prop-types";

const ExpiringCouponsDiv = styled.div`
	display: flex;
	flex :1;
	justify-content: center;
	font-family: sans-serif;
	font-size: calc(13px + .7vmin);
	color: black;
	justify-self:center;
	text-align:center;

	
`;
const styles = {
};

class ExpiringCoupons extends React.Component {
	render() {
		return (
			<ExpiringCouponsDiv>
				<div className="saving_div">
					<div className="total_savings rightBordered">
						<span className="value">{this.props.totalSavings}</span>&nbsp;
						<span className="info">Your total savings</span>
					</div>
					<div className="total_savings">
						<span className="value">{this.props.gasRewards}</span>&nbsp;
						<span className="info">Your gas rewards</span>
					</div>
				</div>
			</ExpiringCouponsDiv>
		);
	}

}

ExpiringCoupons.propTypes = {
	totalSavings: PropTypes.string.isRequired,
	gasRewards: PropTypes.string.isRequired,
};

export default ExpiringCoupons;
