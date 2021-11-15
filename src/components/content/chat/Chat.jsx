import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import './chat.scss'

import sendIcon from '../../../assets/send.png'

const conectionUrl = "http://localhost:3001";
const socket = socketIOClient(conectionUrl, {
    transports: ['websocket', 'polling', 'flashsocket'],
  });

function Chat(props) {
    const [message, setMessage] = useState('')       
    const [messages, setMessages] = useState([
        {id: 1, message: 'Boa noite, amor'},
        {id: 2, message: 'Boa noite, meu bem'},
        {id: 1, message: 'Vc tá bem?'},
        {id: 2, message: 'To ótima'},
    ])  

    useEffect(() => {    
        function handleNewMessage(newMessage){
            setMessages([...messages, newMessage])
        }
        socket.on('chat.message', handleNewMessage)
        console.log(messages)
        return () => socket.off('chat.message', handleNewMessage)
    }, [messages])


    function handleInputSubmit(e){
        e.preventDefault()
        if (message.trim()){
            socket.emit('chat.message', {id: props.userId, message})
            setMessage('')
        }
    }

    function renderMessages(){
        return messages.map(message =>{
            var classes = ''
            if(message.id === props.userId){
                classes = 'mine'
            }
            else{
                classes = 'other'
            }
            return(
                <div className={classes} key={message.index}>
                    {message.message}
                </div>
            )
        })
    }

    return ( 
        <div className="chatcontainer">
            <div className="messages">
                {renderMessages()}
            </div>
            <form onSubmit={handleInputSubmit}>
                <input 
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value = {message}
                    onChange = {e => setMessage(e.target.value)} 
                />
                <button><img src={sendIcon} alt="loading..." /></button>
            </form>
        </div>
     );
}

export default Chat;