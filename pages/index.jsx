import { NextSeo } from "next-seo";
import ytVideos from "../assets/videos.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Development from "../components/Development";
import Ecosystem from "../components/Ecosystem";
import Finance from "../components/Finance";
import Header from "../components/Header";
import Nft from "../components/Nft";
import SlideShow from "../components/SlideShow";
import Rio023 from "../components/Rio023/Rio023";

export default function Launchpad() {
  return (
    <div className=" home__outer bg-image">
      <NextSeo
        title="ZENCON Launchpad | A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
        description="A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
      />
      <div className="flex flex-col main lg:gap-32">
        <Header />
        <Banner />
        <Rio023 />
        <SlideShow dataType="youtube" dataSource={ytVideos} />
        <Card />
        <Finance />
        <Nft />
        <Ecosystem />
        <Development />
      </div>
    </div>
  );
}
