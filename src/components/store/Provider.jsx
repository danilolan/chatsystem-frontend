import React, {useState} from 'react';
import Context from './Context'

const StoreProvider = ({ children }) => {
    const [token, setToken] = useState()

    return(
        <Context.Provider
            value={{ token, setToken }}
        >
            {children}
        </Context.Provider>
    )
}

export default StoreProvider