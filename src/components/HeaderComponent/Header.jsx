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
	padding-top: 30px;
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
					<h1 className="MainHeader">{TITLE}</h1>
				</AttractHeader>
			</StyledHeader>
		);
	}

}

Header.propTypes = {
	name: PropTypes.string
};
export default Header;
