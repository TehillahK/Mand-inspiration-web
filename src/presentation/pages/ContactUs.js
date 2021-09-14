import GeneralBanner from "../components/GeneralBanner";
import {GoogleMap,useLoadScript} from '@react-google-maps/api'
function Map() {
    const libraries=["places"];
    const MapStyle={
        width:"30vw",
        height:"20vh"
    }
    const center={
        lat:49.895138,
        lng:-97.138374
    }
    const { isLoaded, loadError } = useLoadScript(
        {
            googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            libraries
        }
    )
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    return(
        <GoogleMap mapContainerStyle={MapStyle} zoom={8} center={center}>

        </GoogleMap>

    )

}


const ContactUs = () => {


    const text=` +1 2049557018
                 info@mandiinspiration.com `
  return(
      <main className={'container'}>
          <GeneralBanner section={'Contact Us'} title={'Contact Information'} text={text} />
            <Map style={{display:"flex"  ,justifyContent:"flex-end"}} />
      </main>
  )

}
export default ContactUs;
