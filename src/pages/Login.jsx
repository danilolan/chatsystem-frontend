import React, {useContext, useState, useEffect} from 'react';
import StoreContext from '../components/store/Context'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './login.scss'

const serverURl = 'http://localhost:3001'

function initialState(){
    return {user: '', password: ''}
}


function Login() {
    const [values, setValues] = useState(initialState)
    const [localToken, setlocalToken] = useState(null)
    const { setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(localToken) {
            setToken(localToken)
            return navigate('/')
        }
    }, [localToken])

    function login(values){
        axios.post(`${serverURl}/login`, values).then(resp => {
            if(resp.data.token){
                setlocalToken(resp.data.token)
            }       
        })
    }

    function onChange(event){
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(event){       
        event.preventDefault()
        login(values)
        setValues(initialState)
    }

    return ( 
        <div className="login">
            <form>
                <h1>Acessar o sistema</h1>
                <div className="control">
                    <label>Usuário: </label>
                    <input type="text" id="user" name="user" onChange={onChange} value={values.user}/>
                </div>
                <div className="control">
                    <label>Senha: </label>
                    <input type="password" id="password" name="password" onChange={onChange} value={values.password}/>
                </div>
                <button onClick={onSubmit}>Entrar</button>
            </form>
        </div>
     );
}

export default Login;