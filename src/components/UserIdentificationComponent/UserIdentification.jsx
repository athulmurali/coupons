
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserIdentification.css';
import Header from '../../components/Header';
import DialPad from '../DialPadComponent/DialPad';

class UserIdentification extends Component{
	constructor(props){
		super(props);
		this.state = {
			phoneNumber: '',
      defaultMessage:'Enter the Phone number associated with the account',
      };
        
		}
		succesfullIdentification = (booleanDataFromDialPad,phoneNumber) => {
			booleanDataFromDialPad ? this.props.history.push(`/DisplayCoupons`):alert('new user');
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
