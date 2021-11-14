import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={"container-fluid "}>
            <div className="container">
            <div className={"bottom-nav"}>
                <h3 style={{marginBottom:"1rem"}}>Navigation</h3>
                <Link to={"/"}>Books</Link>
                <Link to={"/services"}>Our Services</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
            </div>
            <div className={"credits"}>
                <div className={"copy-right"}>
                    <p>
                        Copyright &copy; 2021 Mandi Inspiration
                        <br /> All Rights Reserved
                    </p>
                </div>
            </div>
            </div>
        </footer>
    );
};
export default Footer;
