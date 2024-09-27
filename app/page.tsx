import Header from "./components/layout/header";
import AppZone from "./components/ui/AppZone";
import DigitalProduct from "./components/ui/digital-product";
import FlashSale from "./components/ui/flash-sale";
import FurnitureZone from "./components/ui/FurnitureZone";
import PromotionalSection from "./components/ui/promotional-section";
import TopBrands from "./components/ui/top-brands";



export default function Home() {
  return (
    <>
      <Header />
      <FlashSale />
      <PromotionalSection />
      <FurnitureZone />
      <AppZone />
      <DigitalProduct />
      <TopBrands />
    </>
  );
}
