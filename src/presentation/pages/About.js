import PageInfo from "../components/PageInfo";
import GeneralBanner from "../components/GeneralBanner";
import AboutPic from "../assets/about-us.jpg";

const About = () => {
    return (
        <main className={"container"}>
            <GeneralBanner section={"About Us"} photoUrl={AboutPic} />
            <PageInfo />
        </main>
    );
};
export default About;
