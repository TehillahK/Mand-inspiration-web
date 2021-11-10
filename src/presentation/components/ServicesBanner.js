import React, { useCallback } from "react";
import { getServices } from "../../logic/AccessServices";
import { Link } from "react-router-dom";

function Card(props) {
    const service = props.service;
    return (
        <div className={"d-flex flex-row justify-content-between shadow mb-5 bg-body rounded"}>
            <div className={"d-flex flex-column justify-content-center  p-3 "}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className={"buttons"}>
                    <Link className={"btn btn-primary"} to={"/"}>
                        Publishing
                    </Link>
                    <Link className={"ms-1 btn btn-outline-primary"} to={"/"}>
                        Book consultation
                    </Link>
                </div>
            </div>
            <img src={service.menuImg} alt={""} style={{width:"15rem",height:"25rem",objectFit:"cover"}} />
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
