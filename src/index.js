import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './utils/App';
import * as serviceWorker from './serviceWorker';
import Router from './utils/Router';

<<<<<<< HEAD

ReactDOM.render(<App>
    {alert("Inside")}
 <Router value= "Basic Router Setup"/>
</App>
    ,
     document.getElementById('root'));
=======
ReactDOM.render(
    <App>
        <Router/>
    </App>, 
    document.getElementById('root')
);
>>>>>>> 47506d0e8b4c93ef5fed37c3c9c7c35475d385c0

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
