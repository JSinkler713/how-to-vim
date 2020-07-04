import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>How to Vim</title>
        <meta name='description' content='A site focused on helping developers use the fundamentals of vim and vim shortcuts' />
      </Helmet>
      <p>Welcome to 'How to Vim'.</p>
    </div>
  );
}

export default App;
