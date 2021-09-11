import {Link} from "react-router-dom";

const Footer = () => {
  return(
      <footer className={"container"}>
          <div className={"bottom-nav"}>
              <h3>Navigation</h3>
              <ul>
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
          <div className={"credits"}>
              <div className={"copy-right"}>
                <p>Copyright (c) 2021 Mandi Inspiration<br/> All Rights Reserved</p>
              </div>
          </div>
      </footer>
  )
}
export default Footer;
