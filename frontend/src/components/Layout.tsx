import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20"> {/* PT-20 to offset fixed header */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
