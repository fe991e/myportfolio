import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();

    return (
        <footer>
            <Link className="hom" href="/">{router.pathname === '/' ? <button><a>&#9751;</a></button> : <button><a>&#9750;</a></button>}
            </Link>        
        </footer>
    )
}
export default Footer;