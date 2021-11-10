import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <header>
            <nav className={"navbar  navbar-expand-lg navbar-light "}>
                <div class="container">
                    <Link className={"navbar-brand"} to={"/"}>
                        <img src={Logo} alt={"Company logo"} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="p-3 navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/book-store"}>Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"  to={"/services"}>Our Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/contact-us"}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
