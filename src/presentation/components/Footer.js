import {Link} from "react-router-dom";

const Footer = () => {
  return(
      <footer className={"container"}>
          <div className={"bottom-nav"}>
              <h3>Navigation</h3>
                <Link to={"/"}>Books</Link>
                <Link to={"/services"}>Our Services</Link>
                <Link to={""}>About Us</Link>
                <Link to={""}>Contact Us</Link>
          </div>
          <div className={"credits"}>
              <div className={"copy-right"}>
                <p>Copyright (c) 2021 Mandi Inspiration<br/> All Rights Reserved</p>
              </div>
          </div>
      </footer>
  )
}
export default Footer;
