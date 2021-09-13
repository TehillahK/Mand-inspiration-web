import ServicesBanner from "../components/ServicesBanner";
import GeneralBanner from "../components/GeneralBanner";

const Services = (props) => {
    const services =props.services;
  return(
      <main className={"container"}>
          <GeneralBanner section={'Our Services'} title={'Services'}  />
          <ServicesBanner />
      </main>
  )
}

export default Services;
