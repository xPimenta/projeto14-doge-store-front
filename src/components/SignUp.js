import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SignUp(){
    const navigate = useNavigate()
    const [userSignUp, setUserSignUp] = useState({name: "", email: "", password: "", repeatPassword: "" })
    return(
        <SignUpPage>
            <Logo>MyWallet</Logo>
            <form onSubmit={createAccount}>
                <input onChange={(e) => setUserSignUp({...userSignUp, name: e.target.value})} type="text" placeholder="Nome"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})} type="email" placeholder="Email"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})} type="password" placeholder="Senha"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, repeatPassword: e.target.value})} type="password" placeholder="Repetir senha"/>
                <SubmitButton type="submit" value="Cadastrar"/>
            </form>
            <Link to="/login"><p>Já tem conta?</p></Link>
        </SignUpPage>
    )

    function createAccount(e){
        e.preventDefault()
        const promise = axios.post("http://localhost:5000/sign-up", userSignUp)
        promise.catch((e) => {
            alert("Preencha corretamente!")
            console.log(e)
        })
        promise.then(() => {
            navigate("/login")
        })
        
    }
}

const SignUpPage = styled.div` 
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