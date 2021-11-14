import ServicesBanner from "../components/ServicesBanner";
import GeneralBanner from "../components/GeneralBanner";
import PublishingModal from "../components/PublishingModal";
import MentoringModal from "../components/MentoringModal";
import EditingModal from "../components/EditingModal";

const Services = (props) => {
    const services = props.services;
    return (
        <main className={"container"}>
            <GeneralBanner section={"Our Services"} title={"Services"} />
            <ServicesBanner />
            <PublishingModal />
            <MentoringModal />
            <EditingModal />
        </main>
    );
};

export default Services;
