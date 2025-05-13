import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="py-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default Layout;
