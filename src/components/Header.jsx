import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
// import "../assets/styles/Header.css"

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className="ms-auto d-none d-lg-flex">
                        <Nav.Link as={Link}  to="/" end>
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/vetements">
                            Vêtements
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/chaussures">
                            Chaussures
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
