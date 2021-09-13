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


    const text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet massa purus, quis dignissim 
    sapien lacinia sit amet. Maecenas accumsan, neque ac ullamcorper vehicula, mi magna aliquet nulla, vel sagittis 
    tellus diam porta lorem. Morbi turpis orci, hendrerit eget eros sed, interdum finibus lorem. Suspendisse quis velit
     urna. Suspendisse porta pulvinar tortor et finibus. Quisque tempus pretium justo, non tristique enim pellentesque 
     sed. Sed elementum, tortor vel fringilla facilisis, diam magna volutpat neque, quis euismod ex arcu vitae tellus.`
  return(
      <main className={'container'}>
          <GeneralBanner section={'Contact Us'} title={'Contact Information'} text={text} />
            <Map style={{display:"flex"  ,justifyContent:"flex-end"}} />
      </main>
  )

}
export default ContactUs;
