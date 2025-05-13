import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useMatch } from 'react-router';
import "../assets/styles/Header.css"

function Header() {
    const match = useMatch("/category/:categoryId");
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    {match ? (
                        <span className="fw-bold">
                            Catégorie : {match.params.categoryId}
                        </span>
                    ) : (
                        <span></span>
                    )}
                    <Nav className="ms-auto d-none d-lg-flex">
                        <Nav.Link as={NavLink} to="/" end>
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/vetements">
                            Vêtements
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/chaussures">
                            Chaussures
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;