import { NextSeo } from "next-seo";


import blockchainDoc from "assets/documentation/blockchainDoc.svg";
import zenconAcademy from "assets/documentation/zenconAcademy.svg";
import zeniqWhitepaper from "assets/documentation/zeniqWhitepaper.svg";

import CustomButton from "../components/Atoms/Button/CustomButton";
import Heading from "../components/Atoms/Headings/Heading";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";
import DocumentCard from "../components/Molecules/Content/DocumentCard";
import Navbar from "../components/Navbar/Navbar";


const items = [
  {
    id: 1,
    title: `ZENIQ whitepaper`,
    description:
      "Understand ZENIQ's technology and purposes through our Whitepaper, now available in four different languages.  ",
    imgPath: zeniqWhitepaper,
    href: "https://zeniq.com/whitepaper",
    newTab: true,
  },
  {
    id: 2,
    title: "Smart Chain Documentation",
    description:
      "With the ZSC Documentation, developers have access to all the information necessary to unleash our Smart Chain's full potential.",
    imgPath: blockchainDoc,
    href: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    newTab: true,
  },
  {
    id: 3,
    title: "ZENCON Academy",
    description:
      "ZENCON Academy establishes a series of standards to guide and support growth of the PublicProjects running on the ZENIQ's Smart Chain.",
    imgPath: zenconAcademy,
    href: "/coming-soon",
  },
];

export default function docs() {
  return (
    <>
      <Navbar />
      <NextSeo
        title="ZENCON Launchpad | Documents"
        description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
      />
      <div className="lg:pb-[124px] pb-[65px] lg:pt-[154px] pt-[90px]">
        <section className="text-white bg-[#010222] bg-no-repeat bg-cover grow">
          <div className="max-w-[1030px] px-[30px] mx-auto">
            <div className="flex justify-center mb-[45px] text-3xl mt-14">
              <Heading level="1">Documentation</Heading>
            </div>
            <div className="flex gap-4 lg:gap-8 940px:flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-1/3 940px:w-full justify-between border bg-white border-[#010020] hover:border-[#88FF4E] bg-opacity-20"
                >
                  <DocumentCard
                    ImageSrc={item.imgPath}
                    ImageAlt="icon"
                    HeadingText={item.title}
                    ParagraphText={item.description}
                  />
                  <div className="">
                    <a
                      className="bg-[#87FF4F] hover:bg-[#fff] uppercase font-Hanson lg:text-[16px] text-[14px] p-[13px] text-center block w-full text-[#121212]"
                      href={item.href}
                    >
                      view document
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center text-center mx-auto sm:w-[79%] lg:gap-[30px] sm:gap-[20px] gap-[15px] lg:mt-[121px] sm:mt-[80px] mt-[40px]">
              <h2 className="font-Hanson text-[#87FF4F] text-[32px] uppercase font-bold leading-[40px] 1024px:text-2xl 767px:text-xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6">
                Join our
                <br />
                Community Channels
              </h2>
              <Paragraph text="If you want be fully integrated with ZENIQ's community, check out all our communication channels to be up to date to the latest news and events of ZENIQ." />
              <CustomButton text="Explore ZENIQ" href="https://zeniq.com" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
