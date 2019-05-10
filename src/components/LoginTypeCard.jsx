import Proptypes from "prop-types";
import * as React from "react";

const LoginTypeCard = (props) => {
	return <button
		className={props.isActive ? props.activeClassName : props.inactiveClassName}
		onClick={(e) => {
			props.onSelect(props.cardType);
		}}>
		<img className="image-width" alt={props.cardType}
			 src={props.isActive ? props.activeIconImgSrc : props.inactiveIconImgSrc}/>
		{props.cardName}
	</button>;
};

LoginTypeCard.propTypes = {

	cardName: Proptypes.string,
	cardType: Proptypes.string,
	isActive: Proptypes.bool,
	activeIconImgSrc: Proptypes.string,
	inactiveIconImgSrc: Proptypes.string,
	activeClassName: Proptypes.string,
	inactiveClassName: Proptypes.string,
	onSelect: Proptypes.func

};

export default LoginTypeCard;
