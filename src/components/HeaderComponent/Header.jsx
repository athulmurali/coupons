import React from "react";
import "./Header.css";
import styled, { css } from "styled-components";

const AttractHeader = styled.div`
	display: flex;
	justify-content: center;
	font-family: sans-serif;
	font-size: calc(10px + .7vmin);
	color: black;
`;

class Header extends React.Component {
	
	render() {
		return(
			<AttractHeader>
				<h1> Savings & Coupons </h1>
			</AttractHeader>
		);
	}

}

export default Header;
