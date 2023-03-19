import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { useState } from 'react';

const Nav = () => {
    const [display, setDisplay] = useState(false);
    
    const toggleNav = () => {
        setDisplay(!display)
    }

    return (
        <nav className={display ? styles.nav : null}>
            <button className={display ? styles.btn : null} onClick={toggleNav}>&#9886;</button>    

            <div className={display ? styles.navlinks : null}>
                <Link href="/about"><a>About</a></Link>
                <Link href="/projects"><a>Projects</a></Link>
                <Link href="/techs"><a>Techs</a></Link>
            </div>
        </nav>
    )
}
export default Nav;