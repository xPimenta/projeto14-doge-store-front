import axios from "axios";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Cart from "../shopping-cart.png";
import Logo from "../dogecoin-miner-game.png";

export default function ProductsForSale() {
    
  const URL = `${process.env.REACT_APP_API_URL}/products`;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = axios.get(URL);

    promise.then((response) => {
      setProducts(response.data);
    });
    promise.catch((error) => console.log(error.response.status));
  }, []);

  const navigate = useNavigate();

  function handleClick(e) {
    navigate(`/exclusive/1`);
    // navigate(`/exclusive/${e.description}`);
  }

  return (
    <ShowcasePage>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="Logotipo" />
          <ion-icon name="cart-outline"></ion-icon>
        </HeaderContent>
      </Header>

      <Panel>
        {/* {products.map(e => (
                    <>
                        {e.isAvailable === true && (
                            <BoxItem key={e.description} onClick={(e) => handleClick(e)}>
                                <img src={e.picture} alt={e.description} />
                                <h5>{e.description}</h5>
                                <span>{e.price}</span>
                            </BoxItem>
                        )}
                    </>
                ))} */}

                         <BoxItem onClick={(e) => handleClick(e)}>
                            <img src={Logo} alt="doidera" />
                         </BoxItem>


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

  background-color: #a328d6;

  img {
    width: 30px;
    height: 30px;
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

const Panel = styled.main`
  /* background-color: orange; */
  width: 95%;

  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;

  gap: 30px 20px;

  img {
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

  h5 {
    font-size: 17px;
    text-align: center;
  }

  span {
    margin-bottom: 10px;
    font-size: 17px;
  }
`;
