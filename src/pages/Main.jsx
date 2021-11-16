import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import StoreContext from '../components/store/Context'
import './main.scss'

import Navigator from '../components/navigator/Navigator'
import Header from '../components/content/header/Header'
import Chat from '../components/content/chat/Chat'

const serverURl = 'http://localhost:3001'

function Main() {
    const { token } = useContext(StoreContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`${serverURl}/user?token=${token}`).then(resp =>{
            setUser(resp.data)
        })       
    }, [])
    
    return ( 
        <div className="main">
            <Navigator user={user}/>
            <div className="content">
                <Header name="Exemplo"/>
                <Chat userId={user.id}/>
            </div>
        </div>
     );
}

export default Main;