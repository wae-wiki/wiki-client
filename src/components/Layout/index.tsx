import React from 'react';
import Header from 'components/Header';
import './style.css';

const Layout:React.FC<any> = props => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
};

export default Layout;
