import React from 'react';
import 'csshake/dist/csshake.min.css';
import NavBar from './NavBar';
import './style.css';

function App() {
  return (
    <div className="index-wrapper">
      <span className="index-welcome shake-chunk shake-constant shake-constant--hover">wae wiki</span>
      <NavBar />
    </div>
  );
}

export default App;
