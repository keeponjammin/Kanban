import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import BoardSelect from "./components/BoardSelect";
import Board from "./components/Board";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/boardselect" element={<BoardSelect/>} />
                <Route path="/board" element={<Board/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;