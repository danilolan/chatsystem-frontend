import React, {useState} from 'react';
import './navigator.scss'

import defaultIcon from '../../assets/user.png'
import defaultThais from '../../assets/thais.png'
import defaultPedro from '../../assets/pedro.png'
import defaultMae from '../../assets/mae.png'

function Navigator(props) {
    const user = props.user
    const [userStatus, setUserStatus] = useState('Online')

    const [chats, setChats] = useState(getChats())

    function getChats(){
        var chats = []

        //REQUISIÇÃO
        chats = [
            {id: 1, icon: defaultThais, name: 'Thais Sales', lastM: 'Eu te amo'},
            {id: 2, icon: defaultPedro, name: 'Pedro Henrique', lastM: 'Vamo jogar lol'},
            {id: 3, icon: defaultMae, name: 'Mãe', lastM: 'Cade você?'}
        ]
        //REQUISIÇÃO

        return chats
    }

    function getChat(id){
        //REQUISICAO

        console.log("Chat ", id, "carregado")
    }

    function renderChats(){
        return chats.map( chat => {
            return (
            <div className="chat" onClick={()=>getChat(chat.id)} key={chat.id}>
                <div className="icon"><img src={chat.icon} alt="loading..." /></div>
                <div className="log">
                    <div className="name">{chat.name}</div>
                    <div className="lastm">{chat.lastM}</div>
                </div>           
            </div>
        )})
    }
    return ( 
        <div className="navigator">
            <div className="user">
                <div className="icon"><img src={defaultIcon} alt="loading..." /></div>                
                <div className="log">
                    <div className="name">{user.user}</div>
                    <div className='status'>{userStatus}</div>
                </div>
                
            </div>
            <div className="chats">
                {renderChats()}
            </div>
        </div>
     );
}

export default Navigator;