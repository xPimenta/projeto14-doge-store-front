import axios from "axios";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

import Logo from "../dogecoin-miner-game.png";

export default function Cart() {
  const URLCart = `http://localhost:5100/cart-get`;
  const URLCardsOwned = `http://localhost:5100/cart-owned`;

  const [cartItems, setCartItems] = useState([]);
  const [cardsOwned, setCardsOwned] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  console.log(selectedCards);

  const token = localStorage.getItem("token")
  console.log(token)
  if (!token) {
    navigate("/sign-in")
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

   // GET ITEMS OWNED
   useEffect(() => {
    const promise = axios.get(URLCardsOwned, config);
    promise.then((response) => {
      setCardsOwned(response.data);
    });
    promise.catch((error) => console.log(error));
  }, []);

  // GET ITEMS IN CART
  useEffect(() => {
    const promise = axios.get(URLCart, config);
    promise.then((response) => {
      setCartItems(response.data);
    });
    promise.catch((error) => console.log(error));
  }, []);


  let navigate = useNavigate();

  function selectCard(card) {
    if(selectedCards.includes(card)) {
      console.log("already selected")
    } else {
    setSelectedCards([...selectedCards, card]);
    }
  }

  // BUY SELECTED CARDS  
  function comprarCards() {

    selectedCards.forEach(card => {
    const URLBuyCards = `http://localhost:5100/cart-buy`;
    const promise = axios.post(URLBuyCards, {cards: card}, config);
    promise.catch((e) => {
      alert("Algo deu errado");
      console.log(e);
    });
    promise.then(() => {
      console.log("Compra realizada com sucesso");
      navigate("/checkout");

    });
  });

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
        <h1> Seus NFTs </h1>
        <CardsOwned>
          {cardsOwned.map((card) => (
            <>
              {card.isAvailable === true && (
                <BoxItem>
                  <img src={card.picture} alt={card.description} />
                  <h5>{card.description}</h5>
                  <h5>{card.id}</h5>
                  <span>{card.price}</span>
                </BoxItem>
              )}
            </>
          ))}
        </CardsOwned>
        <h1> Carrinho de compras </h1>
        <CartList>
          {cartItems.map((card) => {
            const selectColor = selectedCards.find(selectedCard => selectedCard.id === card.id)
            console.log(selectColor, !!selectColor)

            return (
            <>
                <BoxItem selected={!!selectColor} onClick={(e) => selectCard(card)}>
                  <img src={card.picture} alt={card.description} />
                  <h5>{card.description}</h5>
                  <h5>{card.id}</h5>
                  <span>{card.price}</span>
                </BoxItem>
            </>
          )})}
        </CartList>
        <Button onClick={() => comprarCards()}>
          <div>
            <button class="btn btn--light">
              <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">Comprar Cards Selecionados</span>
              </span>
            </button>
          </div>
        </Button>
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

  background-color: #e15fed;

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

const BoxItem = styled.div`
  /* background-color: hotpink; */
  width: 150px;
  /* height: 210px; */

  margin: 0 auto;
  padding: 0 0px;
  padding-top: 20px;
  color: ${props => props.selected == "true" ? "3px" : "0px"};

  box-shadow: 3px 3px 8px rgba(225, 95, 237, 1.0);
  border-radius: 10px;
  border-style: solid;
  border-width: ${props => props.selected == true ? "4px" : "0px"};
  border-color: #06FF00;

  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    margin-top: 20px;
    font-size: 17px;
    text-align: center;
    margin-bottom: -10px;
  }

  span {
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 17px;
  }

  &:hover {
    box-shadow: 2px 2px 20px rgba(225, 95, 237, 1);
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

const CartList = styled.div`
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
    --border-color: #7d8082;
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
    transition: all 0.15s ease;
  }

  .btn::before,
  .btn::after {
    content: "";
    margin-bottom: 10px;

    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid var(--border-color);
    transition: all 0.15s ease;
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
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--button-bits-color);
  }

  .btn__inner::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--button-bits-color);
    transition: all 0.2s ease;
  }

  .btn__slide {
    display: block;
    position: absolute;
    top: 0;
    bottom: -5px;
    left: -8px;
    width: 0;
    background-color: #e15fed;
    transform: skew(-15deg);
    transition: all 0.2s ease;
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
    --button-text-color: #e15fed;
    --button-inner-border-color: #e15fed;
    --button-text-color-hover: #ece8e1;
    /* --button-bits-color-hover: #ece8e1; */
  }
`;
