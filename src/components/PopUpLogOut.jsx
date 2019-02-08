import Popup from "./DisplayCouponComponent/DisplayCoupons";
import React from "react";

const  PopUpLogOut = (props)=>(<Popup trigger={<button ref = {props.logOutPopUpTrigger}  className="button" ></button>} true modal>
    {close => (
        <div className="modal">
            <img className="logOutImage" alt="Log out success" src={props.LogOut_Success}></img>
            <h1 className="logOutMessage1"> Enjoy your savings!</h1>
            <h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
        </div>)}
</Popup> )


export default PopUpLogOut