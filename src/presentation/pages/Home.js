import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import MandiPhoto from "../assets/mandi-main.png"
const Home = () => {
    return(
        <div>
            <Navbar />
            <HomeBanner photoUrl={MandiPhoto} />
        </div>
    )
}

export default Home;
