import React from 'react';
import Background from '../components/Background';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';

export default function Rooms () {
  return (
    <div>
      <Background background="roomsHero">
        <Banner title="Our Nice Rooms">
          <Link className="btn-primary" to="/">
            Home
          </Link>
        </Banner>
      </Background>
    </div>
  );
}
