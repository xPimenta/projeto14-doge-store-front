import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

import Logo1 from "../dogecoin-miner-game.png"

export default function SignUp(){

    const URL = `${process.env.REACT_APP_API_URL}/sign-up`

    const navigate = useNavigate()
    const [userSignUp, setUserSignUp] = useState({name: "", email: "", password: "", repeatPassword: "" })
    return(
        <SignUpPage>
             <img src={Logo1} alt="Logotipo" />
            <Logo>Doge store</Logo>
            <form onSubmit={createAccount}>
                <input onChange={(e) => setUserSignUp({...userSignUp, name: e.target.value})} type="text" placeholder="Nome"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})} type="email" placeholder="Email"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})} type="password" placeholder="Senha"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, repeatPassword: e.target.value})} type="password" placeholder="Repetir senha"/>
                {/* <SubmitButton type="submit" value="Cadastrar"/> */}
                <Button type="submit"><div><button class="btn btn--light"><span class="btn__inner"><span class="btn__slide"></span>
            <span class="btn__content">Cadastrar</span></span></button></div></Button>
                
            </form>
            <Link to="/"><p>Já tem conta?</p></Link>
        </SignUpPage>
    )

    function createAccount(e){
        e.preventDefault()
        const promise = axios.post(URL, userSignUp)
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
    font-size: 32px;
    margin-bottom: 24px;
`


/* ------------------- BUTTON ------------------- */
const Button = styled.div`

margin-top:10px;

.btn {
  --background-color: #0f1923;
  /* Clean style */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: var(--button-text-color);
  cursor: pointer;
  /* Clean style */
  
  --button-text-color: var(--background-color);
  --button-text-color-hover: var(--button-background-color);
  --border-color: #7D8082;
  --button-background-color: #ece8e1;
  --highlight-color: #ff4655;
  --button-inner-border-color: transparent;
  --button-bits-color: var(--background-color);
  --button-bits-color-hover: var(--button-background-color);
  
  position: relative;
  padding: 3px;
  padding-bottom: 13px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}

.btn::before,
.btn::after {
  content: '';
  margin-bottom: 10px;

  display: block;
  position: absolute;
  right: 0; left: 0;
  height: calc(50% - 5px);
  border: 1px solid var(--border-color);
  transition: all .15s ease;
}

.btn::before {
  top: 0;
  border-bottom-width: 0;
}

.btn::after {
  bottom: 0;
  border-top-width: 0;
}

.btn:active,
.btn:focus {
  outline: none;
}

.btn:active::before,
.btn:active::after {
  right: 3px;
  left: 3px;
}

.btn:active::before {
  top: 3px;
}

.btn:active::after {
  bottom: 3px;
}

.btn__inner {
  position: relative;
  display: block;
  padding: 18px 40px;
  background-color: var(--button-background-color);
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px var(--button-inner-border-color);
}

.btn__inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  background-color: var(--button-bits-color);
}

.btn__inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  background-color: var(--button-bits-color);
  transition: all .2s ease;
}

.btn__slide {
  display: block;
  position: absolute;
  top: 0; bottom: -5px; left: -8px;
  width: 0;
  background-color: #E15FED;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.btn__content {
  position: relative;
}

.btn:hover {
  color: var(--button-text-color-hover);
}

.btn:hover .btn__slide {
  width: calc(100% + 15px);
}

.btn:hover .btn__inner::after {
  background-color: var(--button-bits-color-hover);
}

.btn--light {
  --button-background-color: var(--background-color);
  --button-text-color: #E15FED;
  --button-inner-border-color: #E15FED;
  --button-text-color-hover: #ece8e1;
  /* --button-bits-color-hover: #ece8e1; */
}
`;
