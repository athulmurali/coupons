import React from "react";
import "./Header.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import WelcomeHeader from "../WelcomeHeader";

const AttractHeader = styled.div`
  	flex:1;    
  	position: relative;
    text-align:center;
	font-size: calc(13px + .7vmin);
	color: black;
	padding-bottom: 10px;
`;

const StyledHeader = styled.div`
	display : flex;
	flex-direction:row;
	flex :1;
`;

const TITLE = "Savings & Coupons";

class Header extends React.Component {

	render() {
		return(

			<StyledHeader>
				{this.props.name && <WelcomeHeader userName={this.props.name}/>}
				<AttractHeader>
					<div className="MainHeader">{TITLE}</div>
				</AttractHeader>
			</StyledHeader>
		);
	}

}

Header.propTypes = {
	name: PropTypes.string
};
export default Header;
