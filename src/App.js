import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutUsBig from "./components/AboutUsBig";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Prices from "./components/Prices";

function App() {
    return (
        <>
            <HashRouter>
                <div className="main-wrap">
                    <div className="content">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/aboutUs" element={<AboutUsBig />} />
                            <Route path="/Prices" element={<Prices />} />
                            <Route path="/FAQ" element={<FAQ />} />
                            <Route path="/Services" element={<Services />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        </>
    );
}

export default App;
