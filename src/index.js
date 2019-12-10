import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Route} from 'react-router-dom';
import {RoomProvider} from './Context';

ReactDOM.render (
  <RoomProvider>
    <Route>
      <App />
    </Route>
  </RoomProvider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();
