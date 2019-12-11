import React from 'react';
import Background from '../components/Background';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import {MapContainer} from '../components/MapContainer';

export default function Home () {
  return (
    <React.Fragment>
      <Background>
        <Banner
          title="Welcome to Hotel De Lapel"
          subtitle="We provide a 5-star service for our customers"
        >
          <Link to="/rooms" className="btn-primary">Rooms</Link>
        </Banner>
      </Background>
      <Services />
      <FeaturedRooms />
      <MapContainer />
    </React.Fragment>
  );
}
