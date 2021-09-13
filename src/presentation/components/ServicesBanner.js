import React, {useCallback} from "react";
import {getServices} from "../../logic/AccessServices";
import {Link} from "react-router-dom";

function Card(props) {
    const service = props.service;
    return(
        <div className={"menu-card"}>
            <div className={"card-text"}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className={"buttons"}>
                    <Link className={"blue-button"} to={'/'}>Publishing</Link>
                    <Link className={"white-button"} to={'/'}>Book consultation</Link>
                </div>
            </div>
            <img src={service.menuImg} alt={""} />
        </div>
    )

}
function Cards(props) {
    const services = props.services;
    const cards = useCallback(services,[services])


    return (
        <div className={"flex flex-column"}>
            {
                cards.map(
                    (card)=> <Card key={card.id} service={card} />
                )
                //  memoizedValue


            }
        </div>
    )
}



const ServicesBanner = () => {
    const services  = getServices();
  return(
      <div className={"container"}>
          <Cards services={services} />
      </div>

  )

}
export default ServicesBanner;
