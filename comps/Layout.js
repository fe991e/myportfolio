import Socials from './Socials'
import Nav from './Nav'
import Footer from './Footer';
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/fe991e/myportfolio/master/public/favicon.ico"/>
            </Head>
            <Socials />
            <Nav />
            { children }
            <Footer />          
        </div>
    )
}
export default Layout;