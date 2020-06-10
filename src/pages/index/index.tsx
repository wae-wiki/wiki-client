import React from 'react';
import 'csshake/dist/csshake.min.css';
// import NavBar from './NavBar';
import './style.css';

const Index: React.FC<any> = props => {
  console.log('props', props);
  return (
    <div className="index-wrapper">
      <span className="index-welcome shake-chunk shake-constant shake-constant--hover">
        <i className="fake-logo" />wiki
      </span>
      {/*<NavBar />*/}
    </div>
  );
}

export default Index;
