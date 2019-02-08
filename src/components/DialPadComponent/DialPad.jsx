import React, {Component} from 'react';
import API from '../../utils/API';
import './DialPad.css';
import Config from '../../config/config';
import AssistancePopUpComponent from "../AssitancePopUpComponent/AssistancePopUpComponent";
import {connect} from "react-redux";
import {ROUTE_DISPLAY_COUPONS} from "../../utils/RouteConstants";
import {updateCoupons} from "../../redux/actions/UserIdentification";

class DialPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            disableTextArea: false,
            defaultMessage: 'Enter the Phone number',
            count: this.props.count,
            cardNumber: false,
            mouseHover: false,
            phoneButton: "act",
            cardButton: "inact",
        };
        window.addEventListener('orientationchange', this.orientationChange);
        this.couponsDetails = [];
        this.Image_card = require('../../assets/icon-card-gray.svg');
        this.Image_phone = require('../../assets/icon-phone-white.svg');
    }

    deleteTheLastDigit = () => {
        let prev = this.state.phoneNumber.slice(0, -1)
        if (prev.length === 6) {
            prev = this.state.phoneNumber.slice(0, -1)
        } else if (prev.length === 9) {
            prev = this.state.phoneNumber.slice(0, -1)
        }
        this.setState({phoneNumber: prev})
    };

    searchForThePhoneNumberInDatabase = async () => {
        try {
            if (this.state.cardNumber === false) {
                this.extractNumberFromFormat = (this.state.phoneNumber.substring(1, 4) + this.state.phoneNumber.substring(6, 9) + this.state.phoneNumber.substring(10));
            } else {

                this.extractNumberFromFormat = this.state.phoneNumber.slice(0, -1);
            }
            console.log(this.extractNumberFromFormat);
            const response = await API.getUserDetails(this.extractNumberFromFormat);

            this.couponsDetails.push(response.data.response.response.Customer[0]);
            const barCodeNumber = response.data.response.response.Customer[0].ID[0].attributes.Value
            const couponsDetails = await API.getUserCoupons(barCodeNumber);
            const couponDetailsArray = couponsDetails.data.response

            this.couponsDetails.push(couponDetailsArray);
            this.props.updateCoupons({'couponDetails': this.couponsDetails})
            this.props.history.push(ROUTE_DISPLAY_COUPONS)
        } catch (error) {

            this.setErrorMessage();
        }


    };

    setErrorMessage = () => {
        this.setState({phoneNumber: '', defaultMessage: "Not a valid number Please re enter"});

    };

    checkPhoneNumber = () => {

        if (this.state.cardNumber === false) {
            this.extractNumberFromFormat = (this.state.phoneNumber.substring(1, 4) + this.state.phoneNumber.substring(6, 9) + this.state.phoneNumber.substring(10));
            console.log(this.extractNumberFromFormat);
        } else {
            this.extractNumberFromFormat = this.state.phoneNumber.slice(0, -1);
        }
        //	this.searchForThePhoneNumberInDatabase(this.extractNumberFromFormat);

        (this.extractNumberFromFormat.length === 10 || this.extractNumberFromFormat.length === 12) && this.state.phoneNumber ? this.searchForThePhoneNumberInDatabase() : this.setErrorMessage();

    };

    handleTheKeyClicks = e => {
        this.setState({count: 0})
        if (this.state.cardNumber === false) {
            if (this.state.phoneNumber.length < 14) {

                const clickedValue = e.target.innerText.trim();
                let disableInputArea = false;
                if (!clickedValue) {
                    // alert("Passed nothing");
                } else {
                    let prev = this.state.phoneNumber;
                    if (prev.length === 0) {
                        prev += '(';
                    } else if (prev.length === 4) {
                        prev += ') ';
                    } else if (prev.length === 9) {
                        prev += ' ';
                    }


                    this.setState({
                        phoneNumber: prev + clickedValue,
                        disableTextArea: disableInputArea
                    });
                }
            }
        } else {
            if (this.state.phoneNumber.length < 13) {

                const clickedValue = e.target.innerText.trim();
                let prev = this.state.phoneNumber;
                let disableInputArea = false;
                if (!clickedValue) {
                    // alert("Passed nothing");
                } else {
                    this.setState({
                        phoneNumber: prev + clickedValue,
                        disableTextArea: disableInputArea
                    });
                }
            }
        }
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({count: (this.state.count + 1)})
    }

    startTimer() {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
    }

    handleScreenTap = () => {
        this.props.history.push(`/`);
    };
    handlePhoneClick = () => {
        this.setState({
            count: 0,
            cardNumber: false,
            phoneButton: "act",
            cardButton: "inact",
            defaultMessage: 'Enter the Phone number',
            phoneNumber: '',
        });
        this.Image_phone = require('../../assets/icon-phone-white.svg');
        this.Image_card = require('../../assets/icon-card-gray.svg');
        console.log(this.state.cardNumber);
    };
    handleCardClick = () => {
        this.setState({
            count: 0,
            cardNumber: true,
            cardButton: "act",
            phoneButton: "inact",
            defaultMessage: 'Enter the Card number',
            phoneNumber: '',
        });
        this.Image_card = require('../../assets/icon-card-white.svg');
        this.Image_phone = require('../../assets/icon-phone-gray.svg');
        console.log(this.state.cardNumber);
    };

    render() {

        const slideImages = [
            this.Image_card,
            this.Image_phone
        ];

        this.startTimer();
        if (this.state.count > Config.INACTIVE_USER_IDENTIFICATION) {
            this.setState({count: 0})
            this.handleScreenTap();
        }
        return (
            <div className="messsgeDisplay">
                <div>
                    <button className={this.state.phoneButton} onClick={this.handlePhoneClick}>
                        <img className="image-width" alt="phone number" src={slideImages[1]}/>
                        Phone Number
                    </button>
                    <button className={this.state.cardButton} onClick={this.handleCardClick}>
                        <img className="image-width" alt ="card number" src={slideImages[0]}/>
                        Card Number
                    </button>
                </div>
                <input className="inputText" id="test-input" maxLength={12} defaultValue={this.state.phoneNumber}/>
                <div className="status-block">
                    <h3 className="statusMessage"> {this.state.defaultMessage} </h3>
                    <h3 className="statusMessage">associated with your account</h3>
                </div>
                <div id="container">
                    <ul id="keyboard">
                        <li className="letter" onClick={this.handleTheKeyClicks}>1</li>
                        <li className="letter" onClick={this.handleTheKeyClicks}>2</li>
                        <li className="letter" onClick={this.handleTheKeyClicks}>3</li>
                        <li className="letter clearl" onClick={this.handleTheKeyClicks}>4</li>
                        <li className="letter" onClick={this.handleTheKeyClicks}>5</li>
                        <li className="letter" onClick={this.handleTheKeyClicks}>6</li>
                        <li className="letter clearl" onClick={this.handleTheKeyClicks}>7</li>
                        <li className="letter " onClick={this.handleTheKeyClicks}>8</li>
                        <li className="letter" onClick={this.handleTheKeyClicks}>9</li>
                        <li className="letter clearl"></li>
                        <li className="letter" onClick={this.handleTheKeyClicks}>0</li>
                        <li className="letter" onClick={this.deleteTheLastDigit}>&lt;</li>
                        <li className="switch" onClick={this.checkPhoneNumber}>Sign in</li>
                    </ul>
                </div>
                <AssistancePopUpComponent/>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        couponDetails: state.UserIdentification.couponsDetails,
    }
}


const mapDispatchToProps = (dispatch) => (
    {
        updateCoupons: (couponDetails) => updateCoupons(dispatch, couponDetails)

    }
)

export default connect(mapStateToProps, mapDispatchToProps)(DialPad)