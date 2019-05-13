import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./utils/Router";


import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import combinedReducer from "./redux/reducers";
import {onChangeSearchSortFilter} from "./redux/storeChangeListeners";
import {composeWithDevTools} from "redux-devtools-extension";
import TimerMiddleware from "./redux/TimerMiddleware";

const middleware = applyMiddleware(promise(), thunk, TimerMiddleware);


const store = createStore(combinedReducer,composeWithDevTools(middleware));

store.subscribe(() => {onChangeSearchSortFilter(store.getState(), store.dispatch);});

ReactDOM.render(
	<Provider store={store}>
			<Router/>
	</Provider>,
	document.getElementById("root"));
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
