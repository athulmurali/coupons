import Popup from "../DisplayCouponComponent/DisplayCoupons";
import React from "react";

const SessionEndPopUp = (props) => (
    <Popup
        trigger={<button ref={props.buttonTrigger} className="button"/>} true modal>
        {close => (
            <div className="modal">
                <h1 className="popupHeader"> Are you still there? </h1>
                <h4 className="popupMessage">Your session is about to expire</h4>
                <div className="bar">
                    <div className="in"></div>
                </div>
                <div className="actions">
                    <button
                        className="buttons"
                        onClick={() => {
                            close();
                            this.setState({logOutTrigger: true})
                        }}>
                        Logout
                    </button>
                    <button
                        className="buttons"
                        onClick={() => {
                            this.timerReset();
                            close();
                        }}>
                        I'm here
                    </button>
                </div>
            </div>
        )}
    </Popup>)
export default SessionEndPopUp