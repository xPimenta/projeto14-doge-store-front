import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Cart from "../shopping-cart.png";
import Logo from "../dogecoin-miner-game.png";

export default function ProductsForSale(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = axios.get("http://localhost:5100/products");

        promise.then((response) => {
            setProducts(response.data);
        });
        promise.catch(error => console.log(error.response.status));
    }, []);
    
    return(
        <ShowcasePage>
            <Header>
                <HeaderContent>
                    <img src={Logo} alt="Logotipo" />
                    <img src={Cart} alt="Carrinho-de-compras" />
                </HeaderContent>
            </Header>

            <Panel>
                {products.map(e => (
                    <>
                        {e.isAvailable === true && (
                            <BoxItem>
                                <img src={e.picture} alt={e.description} />
                                <h5>{e.description}</h5>
                                <span>{e.price}</span>
                            </BoxItem>
                        )}
                    </>
                ))}
            </Panel>
        </ShowcasePage>
    );
}




/* ------------------- Estilização ------------------- */
const ShowcasePage = styled.div`
    width: 100%;
    padding-bottom: 50px;
`;

const Header = styled.header`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #A328D6;

    img{
        width: 30px;
        height: 30px;
    }
`;

const HeaderContent = styled.header`
    width: 95%;

    display: flex;
    justify-content: space-between;
    
    img{
        width: 30px;
        height: 30px;
    }
`;

const Panel = styled.main`
    /* background-color: orange; */
    width: 95%;
    
    margin: 0 auto;
    margin-top: 20px;

    display: flex;
    flex-wrap: wrap;

    gap: 30px 20px;

    img{
        width: 100px;
        height: 100px;
    }
`;

const BoxItem = styled.div`
    /* background-color: hotpink; */
    width: 150px;
    /* height: 210px; */

    margin: 0 auto;
    padding: 0 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h5{
        font-size: 17px;
        text-align: center;
    }

    span{
        margin-bottom: 10px;
        font-size: 17px;
    }
`;