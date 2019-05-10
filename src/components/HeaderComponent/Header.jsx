import React from "react";
import "./Header.css";
import styled from "styled-components";

const AttractHeader = styled.div`
	display: flex;
	justify-content: center;
	font-size: calc(13px + .7vmin);
	// font-size: 22px;
	color: black;
	padding: 30px;
`;



class Header extends React.Component {

	render() {
		return(
			<AttractHeader>
				<h1 className="MainHeader"> More Savings </h1>
			</AttractHeader>
		);
	}

}

export default Header;
