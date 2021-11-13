import React, { useCallback } from "react";
import { getServices } from "../../logic/AccessServices";
import { Link } from "react-router-dom";
import PublishingModal from "./PublishingModal";

function Card(props) {
    const service = props.service;
    return (
        <div className={"d-flex flex-row justify-content-between shadow mb-5 bg-body rounded"}>
            <div className={"d-flex flex-column justify-content-center  p-3 "} style={{width:"21rem"}}>
                <h3>{service.name}</h3>
                <p className="card-text text-break  fs-6">{service.description}</p>
                <div className="d-grid gap-2 d-md-flex" >
                    <button  type="button" data-bs-toggle="modal" data-bs-target="#myModal" className={"text-center btn btn-primary text-center"}  >
                        {service.name}
                    </button>
                    <Link   className={"btn btn-outline-primary text-center"}  to={"/"}>
                        Book consultation
                    </Link>
                </div>
            </div>
            <img className="service-card-img img-fluid" src={service.menuImg} alt={""} style={{width:"10rem",height:"25rem",objectFit:"cover"}} />
        </div>
    );
}
function Cards(props) {
    const services = props.services;
    const cards = useCallback(services, [services]);

    return (
        <div className={"flex flex-column"}>
            {
                cards.map((card) => (
                    <Card key={card.id} service={card} />
                ))
                //  memoizedValue
            }
        </div>
    );
}

const ServicesBanner = () => {
    const services = getServices();
    return (
        <div className={"container"}>
            <Cards services={services} />
           
        </div>
    );
};
export default ServicesBanner;
