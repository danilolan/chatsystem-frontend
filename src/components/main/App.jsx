import React from 'react';
import './app.scss';

import Navigator from '../navigator/Navigator'
import Header from '../content/header/Header'
import Chat from '../content/chat/Chat'

function App() {

  var user = {
    name: 'danilo'
  }

  return (
    <div className="App">
      <Navigator/>
      <div className="content">
        <Header name="Exemplo"/>
        <Chat userName={user.name}/>
      </div>
    </div>
  );
}

export default App;
