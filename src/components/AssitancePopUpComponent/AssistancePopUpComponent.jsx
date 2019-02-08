import React from "react";
import Popup from "reactjs-popup";
import {connect} from "react-redux";
import PopUpWindow from "./PopUpWindow";


class AssistancePopUpComponent extends React.Component {
	render() {
		return <Popup contentStyle={{minWidth: "600px",textAlign :"left"}}
			trigger={<span className="switchNoCard" >No card, no problem</span>}
			modal
			open={!!this.props.isPopUpOpen}>

			<PopUpWindow/>

		</Popup>;
	};
}


export const mapStateToProps=(state)=>(
	{
		isPopUpOpen : state.AssistanceReducer.isPopUpOpen
	}
);




export default connect(mapStateToProps,null)(AssistancePopUpComponent);
