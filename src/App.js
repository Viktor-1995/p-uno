import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Services from "./components/Services";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="main-wrap">
                    <div className="content">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/aboutUs" element={<AboutUs />} />
                            <Route path="/FAQ" element={<FAQ />} />
                            <Route path="/Services" element={<Services />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
