import { NextSeo } from "next-seo";
import ytVideos from "../assets/videos.json";
import AboutZeniq from "../components/AboutZeniq/AboutZeniq";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Challenges from "../components/Challenges/Challenges";
import Development from "../components/Development";
import Ecosystem from "../components/Ecosystem";
import Finance from "../components/Finance";
import Header from "../components/Header";
import PastEditions from "../components/PastEditions/PastEditions";
import Rio023 from "../components/Rio023/Rio023";
import SlideShow from "../components/SlideShow";
import UnlockPotential from "../components/UnlockPotential/UnlockPotential";
import Venue from "../components/Vanue/Venue";
import WhatIsZencon from "../components/WhatIsZencon/WhatIsZencon";
import WhyJoinUs from "../components/WhyJoinUs/WhyJoinUs";
import Zencon68Hour from "../components/Zencon68Hour/Zencon68Hour";

export default function Launchpad() {
  return (
    <div className="home__outer bg-home 480px:bg-none">
      <NextSeo
        title="ZENCON Launchpad | A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
        description="A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
      />
      <div className="flex flex-col gap-32 main pb-[80px] 1280px:gap-20 1024px:gap-15 480px:gap-12 480px:bg-mobile sm:bg-none bg-top-center">
        <div className="flex flex-col gap-32 banner-right-bg 1024px:bg-none 1280px:gap-20 1024px:gap-15 480px:gap-12">
          <Header />
          <Banner />
          <Rio023 />
        </div>
        <div className="flex flex-col gap-32 1600px:gap-24 1280px:gap-12">
            <WhatIsZencon />
            <SlideShow dataType="youtube" dataSource={ytVideos} />
            <div className="flex flex-col gap-32 bg-join 1440px:pt-8 940px:pt-4 800px:p-0 1024px:bg-none 1280px:gap-20 1024px:gap-15 480px:gap-12 480px:mt-5">
                <WhyJoinUs />
                <Venue />
                <Challenges />
            </div>
        </div>
        <div className="bg-zencon68 1024px:bg-none">
          <Zencon68Hour />
        </div>
        <div className="flex flex-col gap-32 bg-aboutZeniq 1024px:bg-none 1280px:gap-20 1024px:gap-15 480px:gap-12">
          <AboutZeniq />
          <Card />
        </div>
        <div className="flex flex-col gap-32 bg-pastEvent 1024px:bg-none 1280px:gap-20 1024px:gap-15 480px:gap-12">
          <PastEditions />
          <Finance />
          <UnlockPotential />
        </div>
        <Ecosystem />
        <Development />
      </div>
    </div>
  );
}
