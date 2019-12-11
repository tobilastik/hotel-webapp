import React, {Component} from 'react';
import Title from './Title';
import {FaHiking, FaCocktail, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Relaxing Sceneries',
        info: '  Hotel De Lapel radiates an opulent charm of contemporary and traditional warmth of Nigerian hospitality.',
      },

      {
        icon: <FaShuttleVan />,
        title: 'Amazing Amenities',
        info: '  Hotel De Lapel is a multi star best-in-class hospitality experience that will surely blow your mind.',
      },

      {
        icon: <FaBeer />,
        title: 'Perfect Hotel',
        info: 'The Hotel De Lapel has the friendliest and most relaxing hotel accommodations you need.',
      },
    ],
  };
  render () {
    return (
      <div>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map ((item, index) => {
              return (
                <article key={index} className="service">
                  <span>
                    {item.icon}
                  </span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    );
  }
}
