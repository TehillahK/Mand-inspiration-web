import HomeBanner from "../components/HomeBanner";
import MandiPhoto from "../assets/mandi-main.png"
import OurServices from "../components/OurServices";

const Home = (props) => {
    const services=props.services ;

    return(
        <div>
            <HomeBanner photoUrl={MandiPhoto} />
            <OurServices services={services} />
        </div>
    )
}

export default Home;
