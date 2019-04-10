import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {App} from "./utils/App";
import * as serviceWorker from "./serviceWorker";
import Router from "./utils/Router";


import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";
import combinedReducer from "./redux/reducers";
import {onChangeSearchSortFilter, timerCountDown} from "./redux/storeChangeListeners";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = applyMiddleware(promise(), thunk ,logger);


const store = createStore(combinedReducer,composeWithDevTools(middleware));

store.subscribe(()=>{onChangeSearchSortFilter( store.getState(), store.dispatch )
					timerCountDown(store.getState(), store.dispatch);
})
window.store=store

ReactDOM.render(
	<Provider store={store}>
		<App>
			<Router/>
		</App>
	</Provider>,
	document.getElementById("root"));
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
