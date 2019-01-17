import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UserIdentification.css';
import './AttractLoop.css';
import Header from './Header';
import DialPad from './DialPad';



class UserIdentification extends Component{
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '',
            defaultMessage:'Enter the Phone number associated with the account',
        };
        
    }
    succesfullIdentification = (booleanDataFromDialPad,phoneNumber) => {
        booleanDataFromDialPad ? this.props.history.push(`/`):alert('new user');
    };
    render(){

        return(
            <div>
                
                <Header />
                <DialPad identificationfromDiaPad = {this.succesfullIdentification}/>  
                
            </div>
        );
    };

}


export default UserIdentification;
UserIdentification.propTypes = {
    

    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };