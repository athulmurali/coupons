import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
      number : 10
    }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
=======

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

>>>>>>> f1b41ecad2d4e5830895e25a8d668cd49ee17af9
