import Logo from '../assets/logo.png'
import Home from "../pages/Home";
const Navbar = () => {
    return(
        <header>

            <nav className={"flex nav-jc-sb"}>
                <a className={"nav-logo"} href={Home}>
                    <img src={Logo} alt={"Company logo"} />
                </a>
                <ul className={"nav-jc-c"}>
                    <li>
                        <a href={""}>Home</a>
                    </li>
                    <li>
                        <a href={""}>About</a>
                    </li>


                    <li>
                        <a href={""}>Books</a>
                    </li>

                    <li>
                        <a href={""}>Our Services</a>
                    </li>

                    <li>
                        <a href={""}>Contact us</a>
                    </li>
                </ul>

            </nav>

        </header>
    )
}
export default Navbar;
