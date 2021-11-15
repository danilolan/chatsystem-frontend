import React, {useState} from 'react';
import './chat.scss'

import sendIcon from '../../../assets/send.png'

function Chat(props) {
    const [messages, setMessages] = useState([
        {owner: 'thais', message: 'Boa noite, amor'},
        {owner: 'danilo', message: 'Boa noite, meu bem'},
        {owner: 'danilo', message: 'Vc tá bem?'},
        {owner: 'thais', message: 'To ótima'},
    ])    

    function renderMessages(){
        return messages.map(message =>{
            var classes = ''
            if(message.owner === props.userName){
                classes = 'mine'
            }
            else{
                classes = 'other'
            }
            return(
                <div className={classes}>
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
            <form action="">
                <input 
                    type="text"
                    placeholder="Digite sua mensagem..." 
                />
                <button><img src={sendIcon} alt="loading..." /></button>
            </form>
        </div>
     );
}

export default Chat;