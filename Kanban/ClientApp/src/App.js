import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Overview from "./components/BoardOverview/Overview";
import Board from "./components/Board";

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