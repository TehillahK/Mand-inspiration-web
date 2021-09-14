import {Link} from "react-router-dom";

function InfoBox() {
    return(
        <div className={"flex flex-column center space-between"} >

            <h1>Mandi Inspirations</h1>
            <p>Only you can do it</p>
            <div className={"buttons"}>
                <Link to={"/services"}  className={"blue-button"}>Our Services</Link>
                <Link to={"/about"} className={"white-button"}>Learn More</Link>
            </div>
        </div>
    )

}

const HomeBanner = (props) => {
    return(
        <div className={"flex flex-row "}>
            <InfoBox />
            <img className={" home-image"} src={props.photoUrl} alt={"Mandipa Shumba"}  />
        </div>
    )
}
export default HomeBanner;
