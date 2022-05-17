import axios from "axios";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// import Cart from "../shopping-cart.png";
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

  function handleClick(card) {
    navigate(`/showcase/${card.id}`);
  }

  return (
    <ShowcasePage>
      <Header>
      <HeaderContent>
          <img src={Logo} alt="Logotipo" />
          <Link to="/showcase"><h2> DOGE STORE </h2></Link>
          <Link to="/cart"><ion-icon name="cart-outline" link></ion-icon></Link>
        </HeaderContent>
      </Header>

      <Panel>
      <h1> NFTs disponíveis </h1>
      <CardsOwned>
        {products.map(card => (
                    <>
                        {card.isAvailable === true && (
                            <BoxItem key={card.id} onClick={() => handleClick(card)}>
                                <img src={card.picture} alt={card.description} />
                                <h5>{card.description}</h5>
                                <h5>{card.id}</h5>
                                <span>{card.price}</span>
                            </BoxItem>
                        )}
                    </>
                ))}
                </CardsOwned>



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

  background-color:#E15FED;

  img {
    width: 30px;
    height: 30px;

  border-radius: 10px;
  }

  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const HeaderContent = styled.header`
  width: 95%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 30px;
    height: 30px;
    margin-top: 16px;
  }

  ion-icon {
    font-size: 30px;
    margin-top: 16px;
  }
`;

const Panel = styled.main`
  /* background-color: orange; */
  width: 95%;

  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 30px 20px;

  img {
    width: 100px;
    height: 100px;
  }
`;
const CardsOwned = styled.div`
  margin: 0 auto;
  margin-top: -20px;

  display: flex;
  justify-content: center;
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
  padding: 0 0px;
  padding-top: 20px;

  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
  }

  h5 {
      margin-top: 20px;
    font-size: 17px;
    text-align: center;
    margin-bottom: -10px;
  }

  span {
      margin-top:25px;
    margin-bottom: 10px;
    font-size: 17px;
  }
`;
