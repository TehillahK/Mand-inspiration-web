import HomeBanner from "../components/HomeBanner";
import MandiPhoto from "../assets/mandi-main.png"
import OurServices from "../components/OurServices";
import Portfolio from "../components/Portfolio";

const Home = (props) => {
    const services=props.services ;

    return(
        <main>
            <HomeBanner photoUrl={MandiPhoto} />
            <OurServices services={services} />
            <Portfolio />
        </main>
    )
}

export default Home;
