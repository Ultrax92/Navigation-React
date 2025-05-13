import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router';

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className="ms-auto d-none d-lg-flex">
                        <Nav.Link as={NavLink} to="/" end>
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="category/vetements">
                            Vêtements
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="category/chaussures">
                            Chaussures
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
