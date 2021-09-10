function InfoBox() {
    return(
        <div className={"info"}>
            <h1>Mandi Inspirations</h1>
            <p>Only you can do it</p>
            <div>
                <button>Our Services</button>
                <button>Learn More</button>
            </div>
        </div>
    )

}

const HomeBanner = (props) => {
    return(
        <div className={"container banner"}>
            <InfoBox />
            <img src={props.photoUrl} alt={"Mandipa Shumba"} />
        </div>
    )
}
export default HomeBanner;
