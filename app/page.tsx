import Header from "./components/layout/header";
import Navbar from "./components/layout/navbar";
import Homepage from "./components/pages/home/home";
import AppZone from "./components/ui/AppZone";
import DigitalProduct from "./components/ui/digital-product";
import FlashSale from "./components/ui/flash-sale";
import FurnitureZone from "./components/ui/FurnitureZone";
import PromotionalSection from "./components/ui/promotional-section";



export default function Home() {
  return (
 <>
 <Header />
 <Navbar />
 <Homepage />
 
   
      <FlashSale />
      <PromotionalSection />
      <FurnitureZone />
      <AppZone />
      <DigitalProduct />
    </>
  );
}
