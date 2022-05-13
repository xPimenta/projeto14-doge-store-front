import axios from "axios";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

import Cart from "../shopping-cart.png";
import Logo from "../dogecoin-miner-game.png";

export default function Card() {
  const { idCard } = useParams();
  const URL = `${process.env.REACT_APP_API_URL}/exclusive/${idCard}`;

  const [card, setCard] = useState([]);

  useEffect(() => {
    const promise = axios.get(URL);

    promise.then((response) => {
      setCard(response.data);
      console.log(response.data);
    });
    promise.catch((error) => console.log(error.response.status));
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
            {/* <img src={card.picture} alt={card.description} />
                            <h5>{card.description}</h5>
                            <span>{card.price}</span> */}
            <img src={Logo} alt="doidera" />
            <h5>doidera xD</h5>
            <span>$999</span>
            <Body>
  <span><a href="#"></a></span>
</Body>
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

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #6200EE;

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
  }

  span {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
  }
`;


const Body = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#fff;

span{
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 0px;
  perspective: 1000px;
}
span a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;
  
}
span a:before,
span a:after{
  position: absolute;
  content: "BUTTON";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  color: #fff;
  background: #000;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #000;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

`;
