import { Container } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <Container>
            <CardGroup>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </CardGroup>
        </Container>

        // <Container>

        // </Container>
    );
}

export default Services;
