import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UserIdentification.css';
import Header from '../../views/Header';
import DialPad from '../DialPadComponent/DialPad';
import AttractLoop from '../../views/Header';


class UserIdentification extends Component{
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '',
            defaultMessage:'Enter the Phone number associated with the account',
        };
        
        
    }
    succesfullIdentification = (booleanDataFromDialPad,phoneNumber) => {
        console.log(this.props)
        booleanDataFromDialPad ? this.props.history.push(`/`):alert('new user');
    };
    render(){

        return(
            <div>
                
                <Header history={this.props.history}/>
                <DialPad history={this.props.history} identificationfromDiaPad = {this.succesfullIdentification}/>  
                
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
