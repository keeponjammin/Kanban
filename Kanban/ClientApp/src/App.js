import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/02 Login/Login";
import Overview from "./components/03 Boardoverview/Overview";
import Board from "./components/04 Board/Board"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/boardoverview" element={<Overview/>} />
                <Route path="/board" element={<Board/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;