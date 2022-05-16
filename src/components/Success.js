import { React, useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success(){
    const { user } = useContext(UserContext);
    const { name, email, purchasedData } = user;
    const { address, cep } = purchasedData;

    const navigate = useNavigate();
    setInterval(() => {
        navigate("/cart");
    }, 5000);

    return(
        <SuccessContent>
            <h1>Compra efetuada com Sucesso!</h1>

            <h2>Seus dados de compra</h2>
            <BuyerContent>
                <span><strong>Nome:</strong> {name}</span>
                <span><strong>Email:</strong> {email}</span>
                <span><strong>Endereço de cobrança:</strong> {address}</span>
                <span><strong>CEP:</strong> {cep}</span>
            </BuyerContent>
        </SuccessContent>
    );

}

/* ------------------- Estilização ------------------- */
const SuccessContent = styled.div`
    width: 100%;
    padding-bottom: 50px;
    background-color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1, h2{
        text-align: center;
    }
`;

const BuyerContent = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;

    span{
        font-size: 25px;
        margin-bottom: 10px;
    }
`;