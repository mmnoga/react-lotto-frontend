import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";

export default function LottoApp() {
    return (
        <div className="container">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/game' element={<GamePage/>}></Route>
                    <Route path='/result' element={<ResultPage/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}