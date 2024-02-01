import Navbar from "../navbar/navbar";
import Aboutme from "../aboutme/aboutme";
import LandingAbout from "../landingabout/landingabout";
import Achievement from "../achivement/achievement_corner";

function HomePage() {
  return (
    <div className="overflow-hidden ">
      <div className="bg-black  bg-cover h-screen">

        <div className="p-2"><Navbar /> </div>
        <div>
        <div className="" ><LandingAbout /> </div>

      
  
      </div>
      
      </div>

      <div className="h-screen ">
        <div className="h-screen ">
          <Aboutme />
        </div>
      </div>
      <div className=" h-screen"> <Achievement /></div>

    </div>
  );
}

export default HomePage;
