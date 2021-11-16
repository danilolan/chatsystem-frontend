import React, {useContext, useState} from 'react';
import StoreContext from '../components/store/Context'
import {useNavigate} from 'react-router-dom'
import './login.scss'

function initialState(){
    return {user: '', password: ''}
}

function login({ user, password }){
    if(user === 'admin'){  //VERIFICAO API
        return {token: '123'}
    }
    else{
        return {error: 'Usuário ou senha invalidos'}
    }

}
function Login() {
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    function onChange(event){
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(event){       
        event.preventDefault()
        const { token } = login(values)
        if(token) {
            setToken(token)
            return navigate('/')
        }
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