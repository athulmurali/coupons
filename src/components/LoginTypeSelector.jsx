import * as React from "react";

import "./DialPadComponent/DialPad.css";

import PHONE_ACTIVE_IMG from "../assets/icon-phone-white.svg";
import PHONE_INACTIVE_IMG from "../assets/icon-phone-gray.svg";

import MEMBERSHIP_CARD_ACTIVE_IMG from "../assets/icon-card-white.svg";
import MEMBERSHIP_CARD_INACTIVE_IMG from "../assets/icon-card-gray.svg";
import LoginTypeCard from "./LoginTypeCard";

const INPUT_TYPE = Object.freeze({
	PHONE: Symbol("PHONE"),
	MEMBERSHIP_CARD: Symbol("MEMBERSHIP_CARD"),
});

export default class LoginTypeSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedType: INPUT_TYPE.PHONE};
	}

	selectType = (inputType) => this.setState({selectedType: inputType});

	render() {
		return <div>
			<LoginTypeCard
				cardName={"Phone"}
				cardType={INPUT_TYPE.PHONE}
				isActive={this.state.selectedType === INPUT_TYPE.PHONE}
				activeIconImgSrc={PHONE_ACTIVE_IMG}
				inactiveIconImgSrc={PHONE_INACTIVE_IMG}
				activeClassName="act"
				inactiveClassName="inact"
				onSelect={this.selectType}
			/>
			<LoginTypeCard
				cardName={"Member"}
				cardType={INPUT_TYPE.MEMBERSHIP_CARD}
				isActive={this.state.selectedType === INPUT_TYPE.MEMBERSHIP_CARD}
				activeIconImgSrc={MEMBERSHIP_CARD_ACTIVE_IMG}
				inactiveIconImgSrc={MEMBERSHIP_CARD_INACTIVE_IMG}
				activeClassName="act"
				inactiveClassName="inact"
				onSelect={this.selectType}
			/>
		</div>;
	}

}
