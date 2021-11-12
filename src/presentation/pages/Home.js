import HomeBanner from "../components/HomeBanner";
import MandiPhoto from "../assets/mandi-main.png";
import OurServices from "../components/OurServices";
import Portfolio from "../components/Portfolio";
import GeneralBanner from "../components/GeneralBanner";

const Home = (props) => {
    const services = props.services;
    const text = `We are a writing service provider that gives publishing guidelines i.e consulting, editing, mentoring,
                self-publishing guide, publish with us etc to individuals and organizations around the world.`;
    return (
        <main className={"container"}>
            <div className="container">
                <HomeBanner photoUrl={MandiPhoto} />
            </div>
            <GeneralBanner
                section={"Our Services"}
                title={"Who are we?"}
                text={text}
            />
            <OurServices services={services} />
            <Portfolio />
        </main>
    );
};

export default Home;
