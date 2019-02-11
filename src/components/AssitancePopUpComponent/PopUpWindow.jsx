import React from 'react'

import {connect} from "react-redux";
import {mapStateToProps} from "./AssistancePopUpComponent";

import close_button_img from '../../assets/Close-X-2.svg'
import dummy_img from '../../assets/no-account-np-image.png'
import {TOGGLE_POP_UP} from "../../redux/reducers/AssistanceReducer";

const main_header_text = "Want to get exclusive coupons on what you already buy?"
const para1_text1 = "Unlock more savings with your online account."
const para1_tex2 = "Instant access to hundreds of coupons and fuel savings!"


const TEXT_POP_UP_STYLE = {maxWidth: '800px'}
const CLOSE_BUTTON_STYLE = {
    cursor: 'pointer',
    float: 'right',
    marginTop: '12px',
    marginLeft: 10,
    display: 'inline-block'
}

const HEADER_TEXT_STYLE = {fontSize: '30px', fontWeight: 'bold'}
const PARA_TEXT_STYLE = {fontSize: '18px', paddingBottom: '0px'}
const IMG_STYLE = {position: 'relative', width: '99%', marginTop: '20px'}
const PARAGRAPH_STYLE = {marginTop: '30px', marginBottom: '30px'}


const para2_text_1 = "Our Customer Service associates will be happy to help."
const para2_text_2 = "It takes less than 3 minutes to save hundreds of dollars of digital coupons!"


class  PopUpWindow extends React.Component{

    componentDidMount() {
        this.props.togglePopUp()
    }

    render=  () => (
        <div style={{padding: '10px'}}>
            <div>
                <img src={close_button_img} alt="close pop-up" style={CLOSE_BUTTON_STYLE}
                     onClick={this.props.togglePopUp}/>

                <div style={TEXT_POP_UP_STYLE}>
                    <div className="popupHeader" style={HEADER_TEXT_STYLE}> {main_header_text} </div>
                    <div style={PARAGRAPH_STYLE}>
                        <span className="popupMessage" style={PARA_TEXT_STYLE}>{para1_text1}</span><br/>
                        <span className="popupMessage" style={PARA_TEXT_STYLE}>{para1_tex2}</span>

                    </div>
                    <div style={PARAGRAPH_STYLE}>
                        <span className="popupMessage" style={PARA_TEXT_STYLE}>{para2_text_1}</span><br/>
                        <span className="popupMessage" style={PARA_TEXT_STYLE}>{para2_text_2}</span>
                    </div>
                    <img src={dummy_img} style={IMG_STYLE}/>

                </div>
            </div>

        </div>
    )
}





export const mapDispatchToProps=(dispatch)=>(
    {
        togglePopUp : ()=>{
            dispatch({
                type : TOGGLE_POP_UP
            })
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(PopUpWindow);
