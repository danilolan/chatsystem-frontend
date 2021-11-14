import React from 'react';
import './app.scss';

import Navigator from '../navigator/Navigator'
import Header from '../content/header/Header'
import Chat from '../content/chat/Chat'

function App() {
  return (
    <div className="App">
      <Navigator/>
      <div className="content">
        <Header/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
