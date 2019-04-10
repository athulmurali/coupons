import React from "react";
import Popup from "reactjs-popup";
import {connect} from "react-redux";
import PopUpWindow from "./PopUpWindow";

const styles = {
	button: {display: "flex", justifyContent: "center"},
	content: {minWidth: "600px", textAlign: "left"}
};

const AssistancePopUpComponent = (props) => (
	<Popup contentStyle={styles.content}
		   trigger={<span className="switchNoCard" style={styles.button}>No card, no problem</span>}
		   modal
		   open={!!props.isPopUpOpen}>
		<PopUpWindow/>

	</Popup>);

export const mapStateToProps = (state) => (
	{
		isPopUpOpen: state.AssistanceReducer.isPopUpOpen
	}
);


export default connect(mapStateToProps, null)(AssistancePopUpComponent);
