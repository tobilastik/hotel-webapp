import React, {Component} from 'react';
import {RoomContext, RoomProvider} from '../Context';
import Loading from './Loading';
import Room from './Room';
import Title from '../components/Title';

export default class Rate extends Component {
  static contextType = RoomContext;

  render () {
    let {loading, featuredRooms: rooms} = this.context;

    rooms = rooms.map (room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title
          title="ROOMS & RATES"
          subtitle="Hotel De Lapel rooms & Suites are all tastefully decorated and provided with every modern amenity for your comfort and relaxation."
        />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>

      </section>
    );
  }
}
