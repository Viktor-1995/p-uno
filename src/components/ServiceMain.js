import { Collapse, Container } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import { useState } from "react";
import "../css/service.css";

function ServiceMain() {
    const [openPPF, setOpenPPF] = useState(false);
    const [openCeramic, setOpenCeramic] = useState(false);
    const [openPolish, setOpenPolish] = useState(false);
    return (
        <div className="service-main-overlay">
            <Container>
                <h2>Main Services we Provide</h2>
                <CardGroup>
                    <Card className="service-card">
                        <h3>Paint Protection Film</h3>
                        <div>
                            <img
                                src={require("../img/Ferrari.jpg")}
                                alt=""
                                onClick={() => setOpenPPF(!openPPF)}
                                width="200px"
                                aria-expanded={openPPF}
                            />
                        </div>
                        <Collapse in={openPPF}>
                            <div id="PPF-text">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="service-card">
                        <h3>Ceramic protaction </h3>
                        <div>
                            <img
                                src={require("../img/Ferrari.jpg")}
                                alt=""
                                onClick={() => setOpenCeramic(!openCeramic)}
                                width="200px"
                            />
                        </div>
                        <Collapse in={openCeramic}>
                            <div id="ceramic-text">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="service-card">
                        <h3>Polish</h3>
                        <div>
                            <img
                                src={require("../img/Ferrari.jpg")}
                                alt=""
                                onClick={() => setOpenPolish(!openPolish)}
                                width="200px"
                            />
                        </div>
                        <Collapse in={openPolish}>
                            <div id="polish-text">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
}

export default ServiceMain;
