import React, {useCallback, useMemo} from "react";


function Description() {
    return(
        <div className={"services"}>
            <h1>Our Services</h1>
            <h2>Who are we?</h2>
            <p className={"text"}>We are a writing service provider that gives publishing guidelines i.e consulting, editing, mentoring,
                self-publishing guide, publish with us etc to individuals and organizations around the world.</p>
        </div>
    )
}
function Card(props){
    const service = props.service;
    return(
        <div className={"card"}>
            <img className={"card-image"} src={service.imageUrl} alt={"service card picture"} alt={`service picture`} />
            <div className={"card-text"}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href={"#"}>Learn more</a>
            </div>
        </div>
    )
}
function Cards(props) {
    const services = props.services;
    const cards = useCallback(services,[services])


    return (
        <div className={"home-cards"}>
            {
                cards.map(
                        (card)=> <Card service={card} />
                    )
              //  memoizedValue


            }
        </div>
    )
}

const OurServices = (props) => {
    const services = props.services;
    return(
        <div className={"container"}>
            <Description />
            <Cards services={services} />
        </div>
    )
}
export default OurServices;
