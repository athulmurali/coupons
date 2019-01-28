import React from "react";
import Popup from "reactjs-popup";
import {connect} from "react-redux";
import PopUpWindow from "./PopUpWindow";


class AssistancePopUpComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <Popup contentStyle={{minWidth: '600px',textAlign :'left'}}
                      trigger={<div className="switchNoCard" style={{cursor: 'pointer'}}>No card, no problem</div>}
                      modal
                      open={!!this.props.isPopUpOpen}>

            <PopUpWindow/>

        </Popup>
    };
}


export const mapStateToProps=(state)=>(
    {
        isPopUpOpen : state.AssistanceReducer.isPopUpOpen
    }
)




export default connect(mapStateToProps,null)(AssistancePopUpComponent);
