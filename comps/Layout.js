import Nav from './Nav'
import Footer from './Footer';
import Socials from './Socials'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Socials />
            <Nav />
            { children }
            <Footer />          
        </div>
    )
}
export default Layout;