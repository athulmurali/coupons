import React from "react";
import Popup from "reactjs-popup";
import '../../../node_modules/font-awesome/css/font-awesome.css'
import close_button_img from '../../assets/Close-X-2.svg'
import dummy_img from '../../assets/no-account-np-image.png'
const main_header_text = "Want to get exclusive coupons on what you already buy?"
const para1_text1 =  "Unlock more savings with your online account."
const para1_tex2 =  "Instant access to hundreds of coupons and fuel savings!"
const IMG_URL = "http://support.flyelite.com/wp-content/uploads/2015/10/RemoteAssistance.jpg"


const TEXT_POP_UP_STYLE = {maxWidth :'680px'}
const  CLOSE_BUTTON_STYLE= {cursor : 'pointer', float: 'right', marginTop :12, marginLeft: 10}

const HEADER_TEXT_STYLE =   {fontSize : '32px',fontWeight: 'bold'}
const PARA_TEXT_STYLE ={fontSize : '20px', paddingBottom:'0px'}
const IMG_STYLE ={position:'relative' ,minWidth :'80%'}



const para2_text_1 ="Our Customer Service associates will be happy to help."
const para2_text_2 ="It takes less than 3 minutes to save hundreds of dollars of digital coupons!"
class AssistancePopUpComponent extends  React.Component {

	render() {
		return <Popup trigger={<button  >Assistance</button>} true modal>
			{() => (
				<div className="modal">
					<div>
						<img src={close_button_img} alt="close pop-up"  style={CLOSE_BUTTON_STYLE}
							 onClick={()=>{alert("close clicked!")}}/>

							 <div style={TEXT_POP_UP_STYLE}>
								 <p className="popupHeader" style={HEADER_TEXT_STYLE }> {main_header_text} </p>
								 <span className="popupMessage" style={PARA_TEXT_STYLE}>{para1_text1}</span><br/>
								 <span className="popupMessage" style={PARA_TEXT_STYLE}>{para1_tex2}</span>

								 <p>
									 <br/>
									 <span className="popupMessage" style={PARA_TEXT_STYLE}>{para2_text_1}</span><br/>
									 <span className="popupMessage" style={PARA_TEXT_STYLE}>{para2_text_2}</span>
								 </p>
								 <img src={dummy_img} style={IMG_STYLE}/>

							 </div>
					</div>

				</div>
			)}
		</Popup>
	};

}
export default AssistancePopUpComponent;