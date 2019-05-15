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
	totalSavingsContainer: {borderRight: "3px solid black"},
	totalSavingsText: {fontWeight: "bold", marginTop: "7px"},
};

class ExpiringCoupons extends React.Component {
	render() {
		return (
			<ExpiringCouponsDiv>
				<div className="saving_div">
					<div className="total_savings" style={styles.totalSavingsContainer}>
						Your total Savings.
						<p style={styles.totalSavingsText}>{this.props.totalSavings}</p>
					</div>
					<div className="total_savings">
						Your total Gas Rewards.
						<p style={styles.totalSavingsText}>{this.props.gasRewards}</p>
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
