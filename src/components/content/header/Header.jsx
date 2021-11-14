import React from 'react';
import './header.scss'

import defaultIcon from '../../../assets/user.png'

function Header(props) {
    return ( 
        <div className="header">
            <div className="icon"><img src={defaultIcon} alt='loading...' /></div>
            <div className="name">{props.name}</div>                      
        </div>
     );
}

export default Header;