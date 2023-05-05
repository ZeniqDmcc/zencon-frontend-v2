import {NextSeo} from "next-seo";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Card from "../components/Card";
import Finance from "../components/Finance";
import Nft from "../components/Nft";
import Ecosystem from "../components/Ecosystem";
import SlideShow from "../components/SlideShow";
import Development from "../components/Development";
import ytVideos from '../assets/videos.json'
import Navbar from "../components/Navbar/Navbar";

export default function Launchpad() {

    return (
        <div className="home__outer bg-image">
                        
            <NextSeo
                title="ZENCON Launchpad | A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
                description="A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
            /> 
            <div className='main'>
                <Header />
                <Banner />
                <SlideShow dataType="youtube" dataSource={ytVideos}/>
                <Card />
                <Finance />
                <Nft />
                <Ecosystem />
                <Development />
            </div>
        </div>

    );
}
