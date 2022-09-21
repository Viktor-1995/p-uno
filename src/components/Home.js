import "react-bootstrap";
import "../css/main.css";
import WelcomeHome from "./WelcomeHome";
import Introduce from "./Introduce";
import AboutUsHome from "./AboutUsHome";

function Home() {
    return (
        <>
            <WelcomeHome />
            <Introduce />
            <AboutUsHome />
        </>
    );
}

export default Home;
