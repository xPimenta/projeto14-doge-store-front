// import axios from "axios"
// import styled from "styled-components"
// import { useState} from "react"
// import { useEffect } from "react"

// export default function Menu(){
//     const [statements, setStatements] = useState([])
//     const [balance, setBalance] = useState(0)
//     useEffect(() => {
//     function getStatements(){
//         const promise = axios.get("https://projeto13-mywallet-back-mp.herokuapp.com/statement", {
//             headers: {
//                 token: localStorage.getItem("token")
//             }
//         })
//         promise.then((response) => {
//             setStatements(response.data)
//             setBalance(getTotal())
//             return balance
//         })
//         promise.catch((e) => {
//             console.log(e)
//         })
// }
// getStatements()
// }, [balance])

    
// }

// const MainScreen = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     margin: auto;
//     width: 80vw;
//     height: 65vh;
//     background-color: #ffffff;
//     border-radius: 5px;
// `

// const Values = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 80%;
//     overflow-y: scroll;
//     overflow-x: scroll;
// `

// const Value = styled.div`
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         width: 90%;
//         margin: 15px auto 0 auto;
//         div{
//             display: flex;
//             justify-content: space-between;
//             line-break: auto;
            
//             p{
//                 margin-right: 10px;
//             }
//         }
// `

// const NewStatements = styled.div`
//     display: flex;
//     width: 80vw;
//     height: 20vh;
//     align-items: center;
//     justify-content: space-between;
//     margin: 15px auto;
//     a{
//         width: 100%;
//         height: 100%;
//         display: flex;
//         justify-content: space-around;
//     }
//     div{
//         background-color: #A328D6;
//         width: 95%;
//         height: 100%;
//         font-size: 17px;
//         font-weight: 700;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         border-radius: 5px;
//         p{
//             color: #ffffff;
//             margin-bottom: 10px;
//             margin-left: 10px;
//             width: 30%;
//         }
//     }
// `

// const Title = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 80vw;
//     margin: 10px auto;
//     h1{
//         color: #ffffff;
//         font-size: 26px;
//         font-weight: 700;
//     }
// `

// const Balance = styled.div`
//     display: flex;
//     width: 90%;
//     justify-content: space-between;
//     align-items: center;
//     margin: auto;
//     p{
//         font-weight: 700;
//     }
// `

// const Empty = styled.p`
//     text-align: center;
//     margin: auto;
//     width: 50%;
//     margin-top: 50%;
//     color: #868686;
// `