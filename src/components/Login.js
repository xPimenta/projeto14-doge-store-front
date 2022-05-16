import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

import Logo1 from "../dogecoin-miner-game.png"

export default function Login(){

    const URL = `http://localhost:5100/sign-in`

    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({email: "", password: ""})
    return(
        <LoginPage>
            <img src={Logo1} alt="Logotipo" />
            <Logo>Doge Store</Logo>
            <form onSubmit={acessAccount}>
                <input onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} placeholder="E-mail" type="email"/>
                <input onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} placeholder="Senha" type="password"/>
                {/* <SubmitButton type="submit" value="Entrar"/> */}
                <Button type="submit"><div><button class="btn btn--light"><span class="btn__inner"><span class="btn__slide"></span>
            <span class="btn__content">Entrar</span></span></button></div></Button>
            </form>
            <Link to="/sign-up"><p>Não tem conta?</p></Link>
        </LoginPage>
    )
    
    function acessAccount(e){
        e.preventDefault()
        const promise = axios.post(URL, userLogin)
        promise.catch((e) => {
            alert("Preencha corretamente!")
            console.log(e)
        })
        promise.then((response) => {
            localStorage.setItem("token", response.data[0])
            localStorage.setItem("name", response.data[1])
            navigate("/showcase")
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

// const SubmitButton = styled.input`
//     background-color: #A328D6;
//     color: #ffffff;
//     font-weight: 700;
// `

const Logo = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
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
