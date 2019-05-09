import React, {Component} from "react";
import PropTypes from "prop-types";
import "./UserIdentification.css";
import Header from "../../components/HeaderComponent/Header";
import DialPad from "../DialPadComponent/DialPad";

class UserIdentification extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Header history={this.props.history}/>
				<DialPad history={this.props.history}/>
			</div>
		);
	};
}

UserIdentification.propTypes = {
    history: PropTypes.shape({
		push: PropTypes.func,
    }).isRequired,
};

export default UserIdentification
