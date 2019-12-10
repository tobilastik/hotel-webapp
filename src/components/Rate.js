import React, {Component} from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading';

export default class Rate extends Component {
  static contextType = RoomContext;

  render () {
    const {featuredRooms: rooms} = this.context;
    console.log (rooms);

    // const {name, greeting} = this.context;

    return (
      <div>
        <h1>ROOMS & RATES</h1>
        Hotel De Lapel rooms & Suites are all tastefully decorated and provided with every modern amenity for your comfort and relaxation.
        <Loading />
      </div>
    );
  }
}
