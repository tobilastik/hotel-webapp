import React, {Component} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

export default class Navbar extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState ({
      menuOpen: !this.state.menuOpen,
    });
  };
  render () {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                src={logo}
                style={{height: 60, width: 100}}
                alt="Hotel Web"
              />
            </Link>
            <button onClick={this.toggleMenu} type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.menuOpen ? 'show-nav nav-links' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/rooms">Gallery</Link>
            </li>
            <li>
              <Link to="/rooms">Events</Link>
            </li>
            <li>
              <Link to="/rooms">About</Link>
            </li>
            <li>
              <Link to="/rooms">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
