import Socicon from 'next/image'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { useState } from 'react';

const Socials = () => {
    const [display, setDisplay] = useState(false);
    
    const copyToClipboard = () => {
        setDisplay(true)
  
        setTimeout(function(){
            setDisplay(false)
        },3000);
    }
    return (
        <header>
            <div id="notif_c" className={display ? styles.notif_cont : null}></div>
            <div>
                <button onClick={copyToClipboard} title="email"><Socicon src="/icons/email_icon.jpg" width={20} height={20}></Socicon></button>

                <Link href="https://m.me/febbieroseb">
                <button title="messenger"><Socicon src="/icons/me_icon.png" width={20} height={20}></Socicon></button> 
                </Link>
            </div>     
        </header>
    )
}
export default Socials;
import Socicon from 'next/image'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { useState } from 'react';

const Socials = () => {
    const [display, setDisplay] = useState(false);
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText("febbieroseb.rmt@gmail.com")

        setDisplay(true)
  
        setTimeout(function(){
            setDisplay(false)
        },3000);
    }
    
    return (
        <header>
            <div id="notif_c" className={display ? styles.notif_cont : null}></div>
            <div>
                <button onClick={copyToClipboard} title="email"><Socicon src="https://raw.githubusercontent.com/fe991e/myportfolio/main/public/icons/email_icon.jpg" width={20} height={20}></Socicon></button>

                <Link href="https://m.me/febbieroseb">
                    <button title="messenger"><Socicon src="https://raw.githubusercontent.com/fe991e/myportfolio/main/public/icons/me_icon.png" width={20} height={20}></Socicon></button> 
                </Link>
            </div>     
        </header>
    )
}
export default Socials;