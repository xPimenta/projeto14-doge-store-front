import axios from "axios";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

import Cart from "../shopping-cart.png";
import Logo from "../dogecoin-miner-game.png";

export default function Card() {
  
  const { idCard } = useParams();
  const URL = `${process.env.REACT_APP_API_URL}/card/${idCard}`;

  const [card, setCard] = useState({});

  useEffect(() => {
    const promise = axios.get(URL);

    promise.then((response) => {
      setCard(response.data);
      console.log(response)
    });
    promise.catch((error) => console.log(error));
  }, []);

  return (
    <ShowcasePage>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="Logotipo" />
          <ion-icon name="cart-outline"></ion-icon>
        </HeaderContent>
      </Header>

      <Panel>
        <>
          <BoxItem>
            <img src={card.picture} alt={card.description} />
                            <h5>{card.description}</h5>
                            <span>{card.price}</span>
            <img src={Logo} alt="doidera" />
            {/* <h5>doidera xD</h5>
            <h6>$999</h6> */}
            <Button><div><button class="btn btn--light"><span class="btn__inner"><span class="btn__slide"></span>
            <span class="btn__content">Adicionar ao carrinho</span></span></button></div></Button>
          </BoxItem>
        </>
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
  margin-bottom: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #E15FED;

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
    width: 350px;
    height: 350px;
  }
`;

const BoxItem = styled.div`
  /* background-color: hotpink; */
  width: 500px;
  /* height: 210px; */

  margin: 0 auto;
  padding: 0 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-size: 25px;
    text-align: center;
    margin-bottom: -30px;
  }

  h6 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 40px;
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
