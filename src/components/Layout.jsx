import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <>
            <Header />
                <Container className="py-4" as={"main"} >
                    <Outlet />
                </Container>
            <Footer />
        </>
    );
};

export default Layout;