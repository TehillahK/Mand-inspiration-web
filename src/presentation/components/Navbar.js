import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <header>
            <nav className={"flex"}>
                <Link className={"nav-logo"} to={"/"}>
                    <img src={Logo} alt={"Company logo"} />
                </Link>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/book-store"}>Books</Link>
                    </li>
                    <li>
                        <Link to={"/services"}>Our Services</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Navbar;
