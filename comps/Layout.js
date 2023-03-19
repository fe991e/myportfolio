import Nav from './Nav'
import Footer from './Footer';
import Socials from './Socials'
import Head from 'next/head'
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