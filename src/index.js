import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./utils/App";
import * as serviceWorker from "./serviceWorker";
import Router from "./utils/Router";
import Scanner from "./components/CameraScannerComponent/Scanner";
import CameraScanner from "./components/CameraScannerComponent/CameraScanner";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import AssistanceReducer from "./redux/reducers/AssistanceReducer";

import configureStore from "store/store";


const combinedReducers = combineReducers({  AssistanceReducer});
const middleware = applyMiddleware(  promise(), thunk ,logger);

const store = createStore(combinedReducers,middleware);

ReactDOM.render(
	<Provider store={configureStore()}>
		<App>
			<Router/>
		</App>
	</Provider>,
	document.getElementById("root"));
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
