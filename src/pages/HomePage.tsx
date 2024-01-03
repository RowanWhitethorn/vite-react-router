import { Preloader } from "../componets/1- General/Preloader";
import { Vacaciones } from "../componets/3- Vacaciones/!Vacaciones";
import { Servicios } from "../componets/4- Servicios/!Servicios";
import { Footer } from "../componets/1- General/Footer";
import { Home } from "../componets/2- Home/!Home";
import { ScrollingNavBar } from "../componets/1- General/ScrollingNavBar";

function HomePage() {
  return (
    <>
      <div className="Homepage">
        <ScrollingNavBar isHomePage={true} />
        <section className="section-home" id="home">
            <Home />
          </section>
        <section className="section-vacation" id="vacaciones">
            <Vacaciones />
        </section> 
        <section className="section-services" id="servicios">
          <Servicios />
        </section>
        <Footer />
        <Preloader />
      </div>
    </>
  );
}
export default HomePage;
