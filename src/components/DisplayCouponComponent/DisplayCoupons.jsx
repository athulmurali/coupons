import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import Popup from "reactjs-popup";
import ReactToPrint from "react-to-print";
import Config from "../../config/config";
import {connect} from "react-redux";
import CouponCards from "../CouponCardComponent/CouponCards";
import {updateCoupons} from "../../redux/actions/UserIdentification";
import {displayCouponState} from "../../redux/actions/DisplayCouponAction";
import SearchCouponByName from "../SearchComponent/SearchCoupon";
import SortComponent from "../SortComponent";
import FilterComponent from "../FilterComponent/filterComponent"
class Coupons extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            hideLoadedCoupons: true,
            hideNewCoupons: false,
            activeNewCoupons: "active",
            activeLoadedCoupons: "inactive",
            logOutTrigger: false,
            logOutReload: false,

        };
    }

    buttonClick = (el) => {
        if(el) {
            el.click();
        };
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    componentDidMount () {
        this.startTimer();
        this.tick();
    }

    tick () {
        this.setState({count: (this.state.count + 1)});
    }

    startTimer () {
        clearInterval(this.timer);
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    timerReset = () =>  {
        this.setState({count : 0});
    }

    handleScreenTap = () => {
        this.props.history.push(`/`);
    }

    NewCoupons = () => {
        this.setState({count : 0, hideNewCoupons : false, hideLoadedCoupons : true, activeNewCoupons : "active", activeLoadedCoupons : "inactive"});
    }

    LoadedCoupons = () => {
        this.setState({count : 0, hideNewCoupons : true, hideLoadedCoupons : false, activeNewCoupons : "inactive", activeLoadedCoupons : "active"});
    }

    render() {

        if(this.props.allCoupons.length<1) {
            return <div>No Data Obtained</div>
        }

        let couponData = this.props.allCoupons;
        let buttonTrigger = "";
        let logOutPopUpTrigger = "";
        let userName = "";

        if(couponData.length > 0) {
            userName = this.props.userInfo.FirstName;
        }


        if(this.state.count > Config.POPUPTIMER){
            buttonTrigger = this.buttonClick;
            if(this.state.count > Config.LOGOUTTIMER) {
                this.handleScreenTap();
            }
        }

        if(this.state.logOutTrigger) {
            logOutPopUpTrigger = this.buttonClick;
            this.setState({logOutTrigger: false},
                ()=>{
                    this.setState({count : 0},
                        ()=>{
                            this.setState({logOutReload: true});
                        });
                });
        }

        if(this.state.logOutReload) {
            if (this.state.count > 3) {
                this.handleScreenTap()
            }
        }

        const LogOut_Success = require("../../assets/success.svg");
        const Search_Icon = require("../../assets/new-filter-search.png");
        let popUpLogout = (<Popup trigger={<button ref = {logOutPopUpTrigger}  className="button" ></button>} true modal>
            {close => (
                <div className="modal">
                    <img className="logOutImage" src={LogOut_Success}></img>
                    <h1 className="logOutMessage1"> Enjoy your savings!</h1>
                    <h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
                </div>)}
        </Popup> );

        let sessionEndPopUp = (<Popup trigger={<button ref = {buttonTrigger}  className="button" ></button>} true modal>
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
                            onClick={() => {close(); this.setState({logOutTrigger: true})}} >
                            Logout
                        </button>
                        <button
                            className="buttons"
                            onClick={() => {this.timerReset(); close();}}>
                            I'm here
                        </button>
                    </div>
                </div>
            )}
        </Popup> 	);


        return (
            <div>
                <div className="WelcomeUser_Logout" >
                    <h2 className="userName"> Welcome {userName}! </h2>
                    <button className="logoutButton" ref = {logOutPopUpTrigger} onClick={() => this.setState({logOutTrigger: true})} > Log Out </button>
                </div>
                <Header/>
                <div className="printDiv">
                    <ReactToPrint
                        trigger={() => <button 	className="printButton" hidden={this.state.hideLoadedCoupons}>PRINT</button>}
                        content={() => this.componentRef}
                    />
                </div>

                <div className="AllCoupons">
                    <ul>
                        <li> <a  className={this.state.activeNewCoupons} onClick={this.NewCoupons} > New Coupons </a></li>
                        {/* <li> <a  className={this.state.activeLoadedCoupons} onClick={this.LoadedCoupons}> Loaded Coupons </a></li> */}

                        <FilterComponent/>
                        <SortComponent/>
                    </ul>
                    {popUpLogout}
                    {sessionEndPopUp}
                    <div className="LoadedCoupons"  hidden={this.state.hideNewCoupons}   >
                        <SearchCouponByName />
                        <div onClick={this.timerReset}>
                            <CouponCards  />
                        </div>
                    </div>
                    {/* <div className="LoadedCoupons"  hidden={this.state.hideLoadedCoupons} ref= {el => (this.componentRef = el)} >
						<h4 className="LoadedCouponCount"> Loaded Coupons ({couponsLength}) </h4>
						{userCoupons}
					</div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        data : state.UserIdentification.couponDetails,
        userInfo : state.DisplayCouponsReducer.userInfo,
        allCoupons: state.DisplayCouponsReducer.allCoupons
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        displayCouponState : (updatedValue) => displayCouponState(dispatch, updatedValue),
        updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue )

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Coupons);
