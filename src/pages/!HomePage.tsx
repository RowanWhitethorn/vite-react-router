import { Preloader } from "../componets/1- General/Preloader";
//import { Home } from "../componets/2- Home/!Home";
///import { Vacaciones } from "../componets/3- Vacaciones/!Vacaciones";
//import { Servicios } from "../componets/4- Servicios/!Servicios";
import { Footer } from "../componets/1- General/Footer";
//import { ScrollingNavBar } from "../componets/1- General/ScrollingNavBar";

function HomePage() {
  return (
    <>
      <div className="Homepage">


        <Footer />
        <Preloader />
      </div>
    </>
  );
}
export default HomePage;
