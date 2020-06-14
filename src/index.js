import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import MediaCart from './MediaCard';
import Gate from './Gate';

ReactDOM.render(
  <div className="mainDiv">
    <h1>Media Card Component</h1>
    <MediaCart 
      title="ReactJS" 
      body={<p>React is a <strong>JS library</strong> which is used to develop Single Page Applications (SPA).</p>}
      imageURL={logo}
    />
    <h1>Gate Component</h1>
    <Gate isOpen={false}/>
  </div>,
  document.getElementById('root')
);

