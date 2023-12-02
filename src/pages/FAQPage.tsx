import { Preloader } from "../componets/1- General/Preloader";
import { Footer } from "../componets/1- General/Footer";
import FaqCard from "../componets/5- FAQ/FAQ";
import { ScrollingNavBar } from "../componets/1- General/ScrollingNavBar";

function FAQPage() {
  return (
    <>
      <div className="FAQ">
        <ScrollingNavBar isHomePage={false} />
        <section className="section-FAQ">
          <FaqCard />
        </section>

        <Footer />

        <Preloader />
      </div>
    </>
  );
}
export default FAQPage;
