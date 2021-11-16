import React from 'react';
import './main.scss'

import Navigator from '../components/navigator/Navigator'
import Header from '../components/content/header/Header'
import Chat from '../components/content/chat/Chat'

function Main() {

    var user = {
        id: 1
      }
    
    return ( 
        <div className="main">
            <Navigator/>
            <div className="content">
                <Header name="Exemplo"/>
                <Chat userId={user.id}/>
            </div>
        </div>
     );
}

export default Main;