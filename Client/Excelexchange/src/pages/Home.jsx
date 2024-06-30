import HeroSection from "../sections/HeroSection";
import Preview from "../sections/Preview";
import CryptoTable from "../sections/CryptoTable";
import CryptoWorld from "../sections/CryptoWorld";
import GetStarted from "../sections/GetStarted";
import Visions from "../sections/Visions";
import Frequently from "../sections/Frequently";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Preview />
      <CryptoTable />
      <CryptoWorld />
      <GetStarted />
      <Visions />
      <Frequently />
    </>
  );
}
