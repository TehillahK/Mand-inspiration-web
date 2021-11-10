import {Link} from "react-router-dom";

const BookConsultation=()=>{
    return(
        <div className={"grid center rounded-rectangle"}>
            <div className={"flex flex-column text-center text-white "}>
                <h2>Like what you see?</h2>
                <h2>Book a consultation with us</h2>
                <p>Get your word out there today</p>
                <Link className={"btn btn-light text-black"} style={{borderRadius:"6rem"}} to={"/contact-us"}>Book Consultation</Link>
            </div>
        </div>
    )
}
export default BookConsultation;
