import React, { Component } from 'react';

import Config from '../config/config';

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
  constructor(props){
    super(props);
    
  }
  
  state = {
    Config,
    
  };

  render() {
    return (<AppContext.Provider value={this.state}>{this.props.children} {alert("Inside App Provider")}</AppContext.Provider>);
  }
}

const App = ({ children }) => <AppProvider>{children} </AppProvider>;

export { App, AppProvider, AppContext, AppConsumer };

