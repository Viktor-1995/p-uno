import "../css/welcomeHome.css";
import Container from "react-bootstrap/Container";

function WelcomeHome() {
    return (
        <div className="main ">
            <div className="overlay"></div>
            <Container className="d-flex text-center">
                <div className="d-flex jusify-content-center welcomehome ">
                    <div className="text home-text ">
                        <h2>What is Car Detailing?</h2>
                        <span>
                            Professional car detailing is the art and the craft
                            of cleaning and restoring a vehicle to like-new
                            condition. Car detailing services are much more
                            precise and labor-intensive than getting a car wash.
                            A car wash is normally an automated system that a
                            car passes through to clean the exterior.
                            Professional auto detailing is always done by hand,
                            and includes exterior and interior car detailing
                            services.
                        </span>
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

export default WelcomeHome;
