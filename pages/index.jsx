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
import PageWrapper from "../components/PageWrapper/PageWrapper";


export default function Launchpad() {
    return (
        <>
            <NextSeo
                title="ZENCON Launchpad | A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
                description="A full insight of the most exciting projects running on the ZENIQ SMARTCHAIN. One click away."
            />
           <div className='main'>
                <Header />
                <Banner />
                <Card />
                <Finance />
                <Nft />
                <Ecosystem />
                <SlideShow dataType="youtube" dataSource={ytVideos}/>
                <Development />  
            </div>
        </>
    );
}
