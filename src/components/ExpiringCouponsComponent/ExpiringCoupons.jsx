import React from "react";
import styled from "styled-components";
import "./ExpiringCoupons.css";
import PropTypes from "prop-types";

const ExpiringCouponsDiv = styled.div`
	display: flex;
	justify-content: center;
	font-family: sans-serif;
	font-size: calc(13px + .7vmin);
	// font-size: 22px;
	color: black;
	
`;
const styles = {
	totalSavingsContainer: {borderRight: "3px solid black"},
	totalSavingsText: {fontWeight: "bold", marginTop: "7px"},
};

class ExpiringCoupons extends React.Component {

	componentDidMount() {
		console.log("gasRewards : ", this.props.gasRewards);
	}

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
