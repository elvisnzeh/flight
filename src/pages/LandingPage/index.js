
import ContactUs from "../../components/ContactUs";
import Header from "../../components/Header";
import Services from "../../components/Services";
import LowestFareComp from "../../components/LowestFareComp";
import { Professional } from "../../components/Professional";
import { Footer } from "../../components/Footer";
import { WorldTour } from "../../components/WorldTour";
import Route from "../../components/Router";



export const Landingpage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
    
   <ContactUs />
      <Header />
      <Services />
      <LowestFareComp/>
      <Professional />
      {/* <WorldTour /> */}
      {/* <Route /> */}
      <Footer  />
    </div>
  );
};
