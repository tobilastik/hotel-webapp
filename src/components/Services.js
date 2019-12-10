import React, {Component} from 'react';
import Title from './Title';
import {FaHiking, FaCocktail, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Relaxing Sceneries',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
      },

      {
        icon: <FaHiking />,
        title: 'free hiking',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
      },

      {
        icon: <FaShuttleVan />,
        title: 'Amazing Amenities',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
      },

      {
        icon: <FaBeer />,
        title: 'Perfect Hotel',
        info: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
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
