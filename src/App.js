import uubackground from "./images/downloaded_images/uu-1.jpg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncubationPage from "./components/IncubationPage";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Layout />} />
                <Route index element ={<Home/>}/>
                <Route path="IncubationPage" element={<IncubationPage />} />

                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
