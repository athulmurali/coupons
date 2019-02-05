
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserIdentification.css';
import Header from '../../components/HeaderComponent/Header';
import DialPad from '../DialPadComponent/DialPad';
import connect from "react-redux/es/connect/connect";
import {UPDATE_COUPON_DETAILS} from "../../redux/reducers/UserIdentification";

class UserIdentification extends Component{
	constructor(props){
		super(props);
		this.state = {
			phoneNumber: '',
			defaultMessage:'Enter the Phone number associated with the account',
      };        
		}
		componentDidMount = () => {
			sessionStorage.setItem('token',true);
		}

		 test=(couponsDetails)=>{
			this.props.history.push({
				pathname : `/DisplayCoupons`,

				state: couponsDetails
			}
		)


}
		succesfullIdentification = (booleanDataFromDialPad,phoneNumber,couponsDetails) => {
			booleanDataFromDialPad ?test(couponsDetails)
				: (
					alert('new user')
				);

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
UserIdentification.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };


const mapStateToProps=(state)=>{
	return {
		couponDetails : state.UserIdentification.couponsDetails
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		updateCoupons : (couponDetails)=>dispatch({
			type : UPDATE_COUPON_DETAILS,
			payload : { ...couponDetails }
		})
	}

}

export default connect (mapStateToProps,mapDispatchToProps)(UserIdentification)