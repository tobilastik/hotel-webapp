import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Background from '../components/Background';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';

export default class SingleRoom extends Component {
  constructor (props) {
    super (props);

    // this.state = {
    //   slug: this.props.match.params.slug,
    //   defaultBcg,
    // };
  }

  componentDidMount () {}

  render () {
    // const {getRoom} = this.context;
    // const room = this.getRoom (this.state.slug);
    // console.log (room);

    return (
      <div>
        This is Single room page
      </div>
    );
  }
}
