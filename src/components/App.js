import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"
import dotenv from "dotenv"
import { useState } from "react"
import SignUp from "./SignUp"
import Login from "./Login"
import ProductsForSale from "./ProductsForSale";
import Card from "./Card";
import Cart from "./Cart";
import Checkout from "./Checkout"
import Success from "./Success"
import UserContext from "../contexts/UserContext"


export default function App(){
    const [user, setUser] = useState();
    const contextValue = { user, setUser };
    return(
        <UserContext.Provider value={contextValue}>
            <BrowserRouter>
            <GlobalStyle/>
                <Routes>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/showcase" element={<ProductsForSale/>}/>
                    <Route path="/showcase/:idCard" element={<Card />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}



