import ServicesBanner from "../components/ServicesBanner";
import GeneralBanner from "../components/GeneralBanner";
import PublishingModal from "../components/PublishingModal";

const Services = (props) => {
    const services = props.services;
    return (
        <main className={"container"}>
            <GeneralBanner section={"Our Services"} title={"Services"} />
            <ServicesBanner />
            <PublishingModal />
        </main>
    );
};

export default Services;
