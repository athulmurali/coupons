import React from "react";
import CouponCard from "./CouponCard";
import PropTypes from "prop-types";
import LoaderComponent from "../LoaderComponent";

const styles = {
	styleNoCoupons: {
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		height: "670px",
		fontSize: "21px"
	}

};


const CouponCardsContainer = (props) => {
	if (!!props.isLoading)
		return <LoaderComponent/>;
	else if (!props.coupons.length)
		return <div style={styles.styleNoCoupons}> No Coupons Found </div>;
	else
		return props.coupons.map((coupon, i) => (
			<CouponCard key={i}
						coupon={coupon}
						inLoadedScreen={props.inLoadedScreen}
						loyaltyNumber={props.loyaltyNumber}
						loadCoupon={props.loadCoupon}
			/>
		));
};

CouponCardsContainer.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	coupons: PropTypes.arrayOf(PropTypes.object).isRequired,
	loyaltyNumber: PropTypes.string,
	inLoadedScreen: PropTypes.bool.isRequired,
	loadCoupon : PropTypes.func.isRequired
};
export default CouponCardsContainer;
