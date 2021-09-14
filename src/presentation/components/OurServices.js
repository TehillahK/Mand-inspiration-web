import React, { useCallback, useMemo } from "react";

function Card(props) {
    const service = props.service;
    return (
        <div className={"card"}>
            <img
                className={"card-image"}
                src={service.imageUrl}
                alt={"service card picture"}
                alt={`service picture`}
            />
            <div className={"card-text"}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href={"#"}>Learn more</a>
            </div>
        </div>
    );
}
function Cards(props) {
    const services = props.services;
    const cards = useCallback(services, [services]);

    return (
        <div className={"home-cards"}>
            {
                cards.map((card) => (
                    <Card key={card.id} service={card} />
                ))
                //  memoizedValue
            }
        </div>
    );
}

const OurServices = (props) => {
    const services = props.services;
    return (
        <div className={"container"}>
            <Cards services={services} />
        </div>
    );
};
export default OurServices;
