import React from 'react';
import Background from '../components/Background';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error () {
  return (
    <div>
      <Background>
        <Banner title="Error 404" subtitle="Page not found">
          <Link className="btn-primary" to="/">Go Back Home</Link>
        </Banner>
      </Background>
    </div>
  );
}
