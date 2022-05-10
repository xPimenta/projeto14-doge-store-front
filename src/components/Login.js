import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login(){
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({email: "", password: ""})
    return(
        <LoginPage>
            <Logo>MyWallet</Logo>
            <form onSubmit={acessAccount}>
                <input onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} placeholder="E-mail" type="email"/>
                <input onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} placeholder="Senha" type="password"/>
                <SubmitButton type="submit" value="Entrar"/>
            </form>
            <Link to="/"><p>Não tem conta?</p></Link>
        </LoginPage>
    )
    
    function acessAccount(e){
        e.preventDefault()
        const promise = axios.post("http://localhost:5000/sign-in", userLogin)
        promise.catch((e) => {
            alert("Preencha corretamente!")
            console.log(e)
        })
        promise.then((response) => {
            localStorage.setItem("token", response.data[0])
            localStorage.setItem("name", response.data[1])
            navigate("/menu")
        })
    }
}

const LoginPage = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    input {
        margin-bottom: 10px;
    }
    p {
        color: #ffffff;
    }
`

const SubmitButton = styled.input`
    background-color: #A328D6;
    color: #ffffff;
    font-weight: 700;
`

const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 24px;
`