import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router';
import "./Header.css"

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className="ms-auto d-none d-lg-flex">
                        <NavLink to="/" end>
                            Accueil
                        </NavLink>
                        <NavLink to="category/vetements">
                            Vêtements
                        </NavLink>
                        <NavLink to="category/chaussures">
                            Chaussures
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
