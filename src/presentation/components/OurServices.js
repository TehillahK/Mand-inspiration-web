import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import PublishingImage from "../assets/publishing-services.jpg";
import EditingImage from "../assets/editing-services.jpg";
import MentoringImage from "../assets/mentoring-service.jpg";
function Card(props) {
  const service = props.service;
  return (
    <div className={"d-flex"}>
      <img
        className={"img-fluid"}
        src={""}
        style={{ height: "9rem", width: "9rem", objectFit: "cover" }}
        alt={""}
      />
      <div className={"d-flex  flex-column"}>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <Link to="">Learn more</Link>
      </div>
    </div>
  );
}
function Cards(props) {
  const services = props.services;
  const cards = useCallback(services, [services]);

  return (
    <div className="d-flex flex-column ">
      <div className="d-md-flex flex-row mb-3 justify-content-evenly">
        <div className="card mb-3 border-0 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: "540px" }}>
          <div className="card-body">
            <div className="d-flex">
              <img
                className={"img-fluid"}
                src={PublishingImage}
                style={{ height: "9rem", width: "9rem", objectFit: "cover" }}
                alt={""}
              />

              <div className={"p-3  d-flex  flex-column"}>
                <h3 className="card-title">Publishing</h3>
                <p  className="card-text text-break  fs-6 ">
                  We print and guide self publishers as self publishing has
                  become more popular
                </p>
                <Link className="card-link fs-6" to="/services">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: "540px" }}>
          <div className="card-body">
            <div className="d-flex">
              <img
                className={"img-fluid"}
                src={EditingImage}
                style={{ height: "9rem", width: "9rem", objectFit: "cover" }}
                alt={""}
              />

              <div className={"p-3  d-flex  flex-column"}>
                <h3 className="card-title">Editing</h3>
                <p className="card-text text-break  fs-6">
                  Copy editing,developmental editing,proof reading, manuscript
                  critique
                </p>
                <Link className="card-link fs-6" to="/services">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
      <div className="card mb-3 border-0 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: "540px" }}>
        <div className="card-body">
          <div className="d-flex">
            <img
              className={"img-fluid"}
              src={MentoringImage}
              style={{ height: "9rem", width: "9rem", objectFit: "cover" }}
              alt={""}
            />

            <div className={"p-3  d-flex  flex-column"}>
              <h3 className="card-title">Mentoring</h3>
              <p  className="card-text text-break  fs-6 ">We mentor not only writers but public speakers and editors</p>
              <Link className="card-link fs-6" to="/services">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
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
