import AboutPic from '../assets/about-us.jpg'
const AboutBanner = () => {
  return(
      <div className={"flex flex-column"}>
          <h1 className={"sub-title"}>About Us</h1>
          <img className={"page-cover center"} src={AboutPic} alt={"people in a meeting"} style={{margin:"auto"}} />
      </div>
  )
}
export default AboutBanner
