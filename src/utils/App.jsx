import React, { Component } from 'react';
import './App.css';


import Config from '../config/config';

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {

  state = {
    Config,
  };

  render() {
    return (<AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>);
  }
}

const App = ({ children }) => <AppProvider >{children} </AppProvider>;

export { App, AppProvider, AppContext, AppConsumer };
