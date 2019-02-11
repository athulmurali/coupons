import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './UserIdentification.css';
import Header from '../../components/HeaderComponent/Header';
import DialPad from '../DialPadComponent/DialPad';
import connect from "react-redux/es/connect/connect";

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

    render(){
			return(
				<div>
					<Header history={this.props.history}/>
						<DialPad history={this.props.history}/>
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



export default connect (mapStateToProps,null)(UserIdentification)