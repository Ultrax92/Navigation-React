import { Container, Navbar } from "react-bootstrap";

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center mt-auto">
            <Container>
                <Navbar.Text className="text-center w-100 text-light">Footer</Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Footer;
