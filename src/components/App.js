import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"
import dotenv from "dotenv"

import SignUp from "./SignUp"
import Login from "./Login"
import ProductsForSale from "./ProductsForSale";
import Card from "./Card";


export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/showcase" element={<ProductsForSale/>}/>
                <Route path="/showcase/:idCard" element={<Card />} />
            </Routes>
        </BrowserRouter>
    )
}

