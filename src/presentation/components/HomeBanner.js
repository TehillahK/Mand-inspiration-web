import { Link } from "react-router-dom";

function InfoBox() {
    return (
        <div className={"d-flex flex-column justify-content-center "}>
            <h1 style={{marginBottom:"2rem"}}>Mandi Inspirations</h1>
            <p style={{marginBottom:"4rem"}}>Only you can do it</p>
            <div className={"d-flex flex-row"}>
                <div class="d-grid">
                    <Link to={"/services"} className={"d-flex  btn btn-primary btn-block"} >
                    Our Services
                    </Link>
                </div>
                <div class="d-grid">
                    <Link to={"/about"} className={"ms-1 d-flex   btn btn-outline-primary btn-block"} >
                    Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}

const HomeBanner = (props) => {
    return (
        <div className={"d-md-flex flex-row mb-3 justify-content-between "}>
            <InfoBox />
            <img
                className="home-image"
                src={props.photoUrl}
                alt={"Mandipa Shumba"}
            />
        </div>
    );
};
export default HomeBanner;
