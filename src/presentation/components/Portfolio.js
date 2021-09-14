import { Link } from "react-router-dom";
import Book1 from "../assets/books/20at60.jpg";
import Book2 from "../assets/books/lwd.jpeg";

function Content() {
    return (
        <div className={"flex flex-column"}>
            <h2 className={"sub-title"}>Our Portfolio</h2>
            <h3 className={"special-title"}>Get your word out there</h3>
            <p>Our portfolio includes these titles and many more</p>
            <div className={"books-home grid two-cols"}>
                <img
                    style={{ height: "671px", width: "508px" }}
                    src={Book1}
                    alt={"20 at 60 by Mandipa Shumba book cover"}
                />
                <img
                    src={Book2}
                    alt={"Legends with dreams by Mandipa Shumba book cover"}
                />
            </div>
            <div style={{ marginTop: "100px" }} className={"grid center"}>
                <Link className={"blue-button"} to={"/"}>
                    Learn More
                </Link>
            </div>
        </div>
    );
}
const Portfolio = () => {
    return (
        <div>
            <Content />
        </div>
    );
};
export default Portfolio;
