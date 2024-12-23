import React, { Suspense } from "react";

const HeroSection = React.lazy(() => import("../sections/HeroSection"));
const Preview = React.lazy(() => import("../sections/Preview"));
const CryptoTable = React.lazy(() => import("../sections/CryptoTable"));
const CryptoWorld = React.lazy(() => import("../sections/CryptoWorld"));
const GetStarted = React.lazy(() => import("../sections/GetStarted"));
const Visions = React.lazy(() => import("../sections/Visions"));
const CryptoJourney = React.lazy(() => import("../sections/CryptoJourney"));
const Frequently = React.lazy(() => import("../sections/Frequently"));

export default function Home() {
  return (
    <Suspense>
      <HeroSection />
      <Preview />
      <CryptoTable />
      <CryptoWorld />
      <CryptoJourney />
      <GetStarted />
      <Visions />
      <Frequently />
    </Suspense>
  );
}
