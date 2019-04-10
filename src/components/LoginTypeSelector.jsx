import * as React from "react";
import "./DialPadComponent/DialPad.css";

import PHONE_ACTIVE_IMG from "../assets/icon-phone-white.svg";
import PHONE_INACTIVE_IMG from "../assets/icon-phone-gray.svg";

import MEMBERSHIP_CARD_ACTIVE_IMG from "../assets/icon-card-white.svg";
import MEMBERSHIP_CARD_INACTIVE_IMG from "../assets/icon-card-gray.svg";
import LoginTypeCard from "./LoginTypeCard";

const LOGIN_TYPES = Object.freeze({
	PHONE: "PHONE",
	MEMBERSHIP_CARD: "MEMBERSHIP_CARD",
});

export default class LoginTypeSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedType: LOGIN_TYPES.PHONE};
	}

	handleClicks = (loginType, handlePhoneClick, handleCardClick) => {
		if (loginType === LOGIN_TYPES.PHONE)
			handlePhoneClick();
		else
			handleCardClick();
	};

	selectType = (loginType) => {
		const {props} = this;
		this.setState({selectedType: loginType},
			() => {
				this.handleClicks(loginType, props.handlePhoneClick, props.handleCardClick);
			});
	};

	render() {
		return <div>
			<LoginTypeCard
				cardName={"Phone"}
				cardType={LOGIN_TYPES.PHONE}
				isActive={this.state.selectedType === LOGIN_TYPES.PHONE}
				activeIconImgSrc={PHONE_ACTIVE_IMG}
				inactiveIconImgSrc={PHONE_INACTIVE_IMG}
				activeClassName="act"
				inactiveClassName="inact"
				onSelect={(loginType) => {
					this.selectType(loginType);
				}}
			/>
			<LoginTypeCard
				cardName={"Card"}
				cardType={LOGIN_TYPES.MEMBERSHIP_CARD}
				isActive={this.state.selectedType === LOGIN_TYPES.MEMBERSHIP_CARD}
				activeIconImgSrc={MEMBERSHIP_CARD_ACTIVE_IMG}
				inactiveIconImgSrc={MEMBERSHIP_CARD_INACTIVE_IMG}
				activeClassName="act"
				inactiveClassName="inact"
				onSelect={(loginType) => {
					this.selectType(loginType);
					this.props.handleCardClick();
				}}
			/>
		</div>;
	}
}
