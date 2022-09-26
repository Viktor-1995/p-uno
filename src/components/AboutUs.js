import { Container } from "react-bootstrap";
import "../css/main.css";

function AboutUs() {
    return (
        <div className="main ">
            <div className="overlay"></div>
            <Container className="d-flex text-center">
                <div className="d-flex jusify-content-center welcomehome ">
                    <div className="text home-text ">
                        <h2>What is Car Detailing?</h2>
                        <span>asdfghjkl;</span>
                    </div>
                    <div className="home-img">
                        <img
                            src="https://www.diamond-detailing.com.ua/wp-content/uploads/2019/06/11IMG_6313.jpg"
                            alt=""
                            width="450px"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
