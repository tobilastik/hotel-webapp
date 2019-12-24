import React, {Component} from 'react';
import Room from '../images/room-1.jpeg';
import Title from './Title';

export default class TourList extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState ({
      showInfo: !this.state.showInfo,
    });
  };
  render () {
    const {id, city, img, name, info} = this.props.tour;
    const {removeTour} = this.props;
    return (
      <article className="tour">

        <div className="tour-img-container">
          <img src={img} alt="Tour" className="img-style" />

          <span
            onClick={() => {
              removeTour (id);
            }}
            className="close-btn"
          >
            <i className="fa fa-times-circle" />

          </span>
        </div>

        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info <span onClick={this.handleInfo}>
              <span>
                <i className="fa fa-caret-down" />

              </span>
            </span>
          </h5>

          {this.state.showInfo && <p>{info} </p>}
        </div>
      </article>
    );
  }
}
