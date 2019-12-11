import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Title from './Title';

export class MapContainer extends Component {
  render () {
    return (
      <section className="featured-rooms">
        <Title title="OUR LOCATION" />

        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick} name={'Current location'} />

        </Map>
      </section>
    );
  }
}

MapContainer = GoogleApiWrapper ({
  apiKey: '',
}) (MapContainer);
