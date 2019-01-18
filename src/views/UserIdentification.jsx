import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UserIdentification extends Component {

  handleScreenTap = () => {
    this.props.history.push(`/displayCoupons`);
  };

  render() {

    return (<div onClick={this.handleScreenTap}>User Identification</div>);
  }
}

export default UserIdentification;

UserIdentification.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
