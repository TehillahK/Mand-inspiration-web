import React from "react";
import AboutPic from "../assets/about-us.jpg";

const GeneralBanner = (props) => {
  return(
    <div>
        <h1 className={"sub-title"}>{props.section}</h1>
        <h2 className={"title"}>{props.title}</h2>
        {
            props.text && <p className={"text"}>{props.text}</p>
        }
        {
            props.photoUrl &&  <img className={"page-cover center"} src={AboutPic} alt={"people in a meeting"} style={{margin:"auto"}} />
        }
    </div>
  )
}
export default GeneralBanner;
