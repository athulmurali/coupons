import React from "react";
import "./Header.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import WelcomeHeader from "../WelcomeHeader";

const AttractHeader = styled.div`
	display: flex;
	flex :1
    justify-content: center;
	font-size: calc(13px + .7vmin);
	// font-size: 22px;
	color: black;
	// padding: 30px;
`;

const StyledHeader = styled.div`
	display : flex;
	flex-direction:row;
	width : 100%;
`;

const TITLE = "Savings & Coupons";

class Header extends React.Component {

	render() {
		return(

			<StyledHeader>
				<AttractHeader>
					<h1 className="MainHeader">{TITLE}</h1>
				</AttractHeader>
				{this.props.name && <WelcomeHeader userName={this.props.name}/>}
			</StyledHeader>
		);
	}

}

Header.propTypes = {
	name: PropTypes.string
};
export default Header;
