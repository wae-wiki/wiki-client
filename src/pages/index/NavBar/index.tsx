import React from 'react';
import { Link } from 'react-router-dom';
import NavBarConfig, { nav } from './navbar.config';
import './style.css';

const NavBar: React.FC<any> = props => {
  return (
    <div
      className="nav-bar"
    >
      <ul className="nav-bar--group">
        {
          NavBarConfig.map((item: nav) => {
            return (
              <li key={item.key} className="nav-bar--item">
                <Link className="nav-bar--item--link" to={item.path}>{item.label}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default NavBar;
