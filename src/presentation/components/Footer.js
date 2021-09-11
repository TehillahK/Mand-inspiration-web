import {Link} from "react-router-dom";

const Footer = () => {
  return(
      <footer className={"container"}>
          <div className={"bottom-nav"}>
              <h3>Navigation</h3>
              <ul className={"nav-jc-c"}>
                  <li>
                      <Link to={"/"}>Books</Link>
                  </li>
                  <li>
                      <Link to={"/services"}>Our Services</Link>
                  </li>
                  <li>
                      <Link to={""}>About Us</Link>
                  </li>

                  <li>
                      <Link to={""}>Contact Us</Link>
                  </li>
              </ul>
          </div>
          <div>
              <p>Copyright (c) 2021 Mandi Inspiration</p>
              <p>All Rights Reserved</p>
          </div>
      </footer>
  )
}
export default Footer;