import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import Header from './Header'

function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>How to Vim</title>
        <meta name='description' content='A site focused on helping developers use the fundamentals of vim and vim shortcuts' />
      </Helmet>
      <Header />
      <ReactPlayer className='reactPlayer' playing='true' loop='true' url='vim-examples/vimExample.mov' />
    </div>
  );
}

export default App;
