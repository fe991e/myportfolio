import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer';
import Socials from './Socials'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <link rel="shortcut icon" href="https://raw.githubusercontent.com/fe991e/myportfolio/main/public/favicon.ico" />
            </Head>
            <Socials />
            <Nav />
            { children }
            <Footer />          
        </div>
    )
}
export default Layout;