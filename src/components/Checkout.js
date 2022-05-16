import axios from "axios";
import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import styled from "styled-components";
import Logo from "../dogecoin-miner-game.png";

export default function Checkout(){
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [address, setAddress] = useState("");
    const [cep, setCep] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function handleCheckOut(e){
        e.preventDefault();

        if(cpf.length === 0 || cpf.length !== 11){
            alert("O número de CPF não é válido");
            return;
        }
        if(address.length === 0){
            alert("Você esqueceu de preencher o campo senha");
            return;
        }
        if(cep.length === 0 || cep.length !== 8){
            alert("O número do CEP não é válido");
            return;
        }
        if(cardNumber.length === 0){
            alert("O número do cartão não é válido");
            return;
        }

        const promise = axios.post(`https://git.heroku.com/doge-store.git/checkout`, {
            email,
            cpf,
            address,
            cep,
            cardNumber
        });
        promise.then(response => {
            setUser(response.data);
            navigate("/success");
        });
        promise.catch(error => {
            console.log(error.response)
            alert("Preencha corretamente");
        })
    }

    return(
        <CheckoutPage>
            <Header>
                <HeaderContent>
                    <img src={Logo} alt="Logotipo" />
                    <ion-icon name="cart-outline"></ion-icon>
                </HeaderContent>
            </Header>

            <form onSubmit={handleCheckOut}>
                <DataInputCheckout>
                    <h2>Complete seu cadastro para finalizar a compra</h2>
                    {/* ----- Finalização cadastral ----- */}
                    <input
                        type="email"
                        placeholder="Confirme seu e-mail"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="number"
                        placeholder="CPF"
                        onChange={e => setCpf(e.target.value)}
                        value={cpf}
                    />
                    <input
                        type="text"
                        placeholder="Endereço de cobrança"
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                    <input
                        type="number"
                        placeholder="CEP"
                        onChange={e => setCep(e.target.value)}
                        value={cep}
                    />
                    <input
                        // type="number"
                        placeholder="Número de cartão"
                        onChange={e => setCardNumber(e.target.value)}
                        value={cardNumber}
                    />
                    <Button>
                        <button type="submit" className="btn btn--light">
                            <span className="btn__inner">
                                <span className="btn__slide"></span>
                                <span className="btn__content">Finalizar compra</span>
                            </span>
                        </button>
                    </Button>
                </DataInputCheckout>
            </form>
        </CheckoutPage>
    );
}

/* ------------------- Estilização ------------------- */
const CheckoutPage = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

const Header = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color:#E15FED;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  img {
    width: 30px;
    height: 30px;

    border-radius: 10px;
  }
`;

const HeaderContent = styled.header`
  width: 95%;

  display: flex;
  justify-content: space-between;

  img {
    width: 30px;
    height: 30px;
  }

  ion-icon {
    font-size: 30px;
  }
`;

const DataInputCheckout = styled.div`
    width: 90%;

    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h2{
        text-align: center;
    }
    
    input{
        width: 100%;

        outline: none;
        padding: 0 10px;
        margin-bottom: 10px;
    }

    span {
        margin-bottom: 10px;
        font-size: 25px;
        font-weight: bold;
    }
`;

/* ------------------- BUTTON ------------------- */
const Button = styled.div`
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
  padding: 8px;
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
  padding: 20px 20px;
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