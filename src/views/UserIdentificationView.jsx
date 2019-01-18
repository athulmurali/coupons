import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserIdentification from '../components/UserIdentificationComponent/UserIdentification';


class UserIdentificationView extends Component{
  constructor(props){
    super(props);
  }  
  render(){
        return(
          
          <UserIdentification history={this.props.history}></UserIdentification>
        );

    };

}
export default UserIdentificationView;
UserIdentificationView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};


// const AppContext = React.createContext();

// const AppConsumer = AppContext.Consumer;

// class AppProvider extends Component {
//     constructor(props){
//       super(props);
      
//     }
    
//     state = {
//       Config,
//       state: { name: 'Jose' },
//       updateState: (key, value) => this.updateState(key, value),
//     };
//     updateState = (key, value) => {
//       const { state } = this.state;
      
//       state[key] = value;
//       this.setState({
//         state,
//       });
//     };
//     render() {
//       return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
//     }
//   }
  
//   const UserIdentificationView = ({ children }) => <AppProvider>{children}</AppProvider>;
  
//   export { UserIdentificationView, AppProvider, AppContext, AppConsumer };