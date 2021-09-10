import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import MandiPhoto from "../assets/mandi-main.png"
import {getServices} from "../../logic/AccessServices";
import OurServices from "../components/OurServices";
import {useCallback} from "react";


const Home = () => {
    const services=getServices();

    return(
        <div>
            <Navbar />
            <HomeBanner photoUrl={MandiPhoto} />
            <OurServices services={services} />
        </div>
    )
}

export default Home;
