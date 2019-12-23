import React, {Component} from 'react';
import TourList from '../components/TourList';
import {tourData} from '../components/tourData';
import Title from '../components/Title';

export default class Tour extends Component {
  state = {
    tours: tourData,
  };

  removeTour = id => {
    const {tours} = this.state;
    const sortedTours = tours.filter (tour => tour.id != id);
    this.setState ({tours: sortedTours});
  };
  render () {
    const {tours} = this.state;
    return (
      <div style={{paddingTop: '40px'}}>
        <Title
          title="Tour"
          subtitle="Hotel De Lapel provides tour services for esteemed customers."
        />
        <section className="tourlist">

          {tours.map (tour => {
            return (
              <TourList
                key={tour.id}
                tour={tour}
                removeTour={this.removeTour}
              />
            );
          })}

        </section>
      </div>
    );
  }
}
