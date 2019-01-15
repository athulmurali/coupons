import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Themes from '../config/themes';
import AttractLoop from '../views/AttractLoop';
import SelectStorePage from '../views/SelectStorePage';
import SearchPage from '../views/SearchPage';
import ResultsPage from '../views/ResultsPage';
import Config from '../config/config';
import API from './API';

const RESET_TIME = Config.resetTime * 1000;

class Router extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.reset = true;
    this.state = {
      overtime: false,
    };
  }

  componentWillMount() {
    sessionStorage.setItem('searchTerm', '');
  }

  /**
   * This method runs whenever the screen is tapped (or clicked). It checks to see if this is the
   * first touch since reset. If it is then it stores a date object and sets reset to false. It then
   * starts the timer.
   */
  handleUserInteract = () => {
    if (this.reset) {
      window.lastReset = new Date();
      this.reset = false;
      this.setState({ overtime: false });
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(this.navigateToAttractLoop, RESET_TIME);
  };

  /**
   * This method runs when the timeout gets through a complete cycle. We then calculate the amount
   * of time that the user has been browsing minus or timeout time (aka RESET_TIME). It then will
   * make an API post request to the server and then route the user back to the attract loop page.
   * The exception to the last sentence is if the RESET_TIME is equal to 0. This is for development
   * purposes.
   */
  navigateToAttractLoop = () => {
    let useTime = Math.abs(window.lastReset - new Date());
    useTime -= RESET_TIME;
    clearTimeout(this.time);
    this.reset = true;
    if (RESET_TIME !== 0 && Config.device === 'kiosk') {
      API.recordTime(Config.storeNumber, useTime);
      sessionStorage.setItem('searchTerm', '');
      this.setState({
        overtime: true,
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={Themes[Config.brand]}>
        <HashRouter>
          <div
            onClick={this.handleUserInteract}
            onKeyDown={this.handleUserInteract}
            onScroll={this.handleUserInteract}
            role="button"
          >
            <Switch>
              <Route exact path="/search/:storeNumber" render={props => <SearchPage overtime={this.state.overtime} {...props} />} />
              <Route exact path="/item-detail/:upc/:storeNumber" render={props => <ResultsPage overtime={this.state.overtime} {...props} />} />
              <Route exact path="/" component={SelectStorePage} />
              <Route path="/:storeNumber" component={AttractLoop} />
            </Switch>
          </div>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default Router;