import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ResultPage from "../pages/ResultPage";
import HeaderComponent from "./HeaderComponent";
import GamePage from "../pages/GamePage";
import TicketPage from "../pages/TicketPage";
import CheckResultPage from "../pages/CheckResultPage";
import ErrorComponent from "./ErrorComponent";

export default function LottoApp() {
    return (
        <div className="container">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/game' element={<GamePage/>}></Route>
                    <Route path='/check-result' element={<CheckResultPage/>}></Route>
                    <Route path='/ticket' element={<TicketPage/>}></Route>
                    <Route path='/result' element={<ResultPage/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}