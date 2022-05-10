import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"

import SignUp from "./SignUp"
import Login from "./Login"
// import Menu from "./Menu"


export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/menu" element={<Menu/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

