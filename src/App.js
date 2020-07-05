import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import Header from './Header'
import OpeningDescription from './OpeningDescription';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>How to Vim</title>
        <meta name='description' content='A site focused on helping developers use the fundamentals of vim and vim shortcuts' />
      </Helmet>
      <Header />
      <div className='vidContainer'>
        <ReactPlayer className='reactPlayer' playing='true' loop='true' url='vim-examples/vimExample.mov' />
      </div>
      <div className='descContainer'>
        <OpeningDescription /> 
      </div>
    </div>
  );
}

export default App;
