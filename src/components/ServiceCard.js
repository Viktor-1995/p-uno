import { Card } from "react-bootstrap";
import React, { useState } from "react";
import Fade from "react-bootstrap/Fade";
import "../css/service.css";

function ServiceCard() {
    const [open, setOpen] = useState(false);
    return (
        <Card>
            <img
                src={require("../img/Ferrari.jpg")}
                alt=""
                onClick={() => setOpen(!open)}
                width="200px"
            />
            <Fade in={open}>
                <div id="example-fade-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                </div>
            </Fade>
        </Card>
    );
}

export default ServiceCard;
