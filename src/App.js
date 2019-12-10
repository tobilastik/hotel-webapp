import React from 'react';
import './App.css';
import Home from './screen/Home';
import Error from './screen/Error';
import SingleRoom from './screen/SingleRoom';
import Rooms from './screen/Rooms';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App () {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>

    </React.Fragment>
  );
}

export default App;
