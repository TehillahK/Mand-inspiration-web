import ServicesBanner from "../components/ServicesBanner";

const Services = (props) => {
    const services =props.services;
  return(
      <main className={"container"}>
          <ServicesBanner />
      </main>
  )
}

export default Services;
