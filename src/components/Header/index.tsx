import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { NAV_CONFIG } from './nav.config';
import { Nav } from '../types/header';
import './style.css';

const Header: React.FC<any> = props => {
  const { history } = props;

  const handleJump = useCallback((path: string) => {
    history.push(path);
  }, [history]);
  return (
    <div className="header">
      <ul className="header-nav-ul__wrapper">
        {
          NAV_CONFIG.map((nav: Nav) => {
            const { path, label, id } = nav;
            return (
              <li className="header-nav-li__item" onClick={() => handleJump(path)} key={id}>
                {label}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default withRouter(Header);
