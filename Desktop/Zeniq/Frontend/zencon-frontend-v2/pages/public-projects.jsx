import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

import Heading from "../components/Atoms/Headings/Heading";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";
import Navbar from "../components/Navbar/Navbar";
import avinoc from "../public/assets/projects/Avinoc/avinoc.jpg";
import tupan from "../public/assets/projects/Tupan/tupan.png";
import datalink from "/public/assets/projects/Datalink/index.png";
import fidora from "/public/assets/projects/Fidora/logo.png";
import huitzil from "/public/assets/projects/Huitzil/index.png";
import nfarm from "/public/assets/projects/Nfarm/logo.png";
import truecommit from "/public/assets/projects/Truecommit/logo.png";
import infilmart from "/public/assets/projects/infilmart/index.png";

const items = [
  {
    id: 1,
    title: "DATALINK",
    authors: "Developer",
    short_description:
      "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets.",
    detailed_description:
      "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.\n" +
      "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.",
    app_image: datalink,
    landing_page: "https://datalinkdao.com/",
  },
  {
    id: 2,
    title: "TRUE COMMIT",
    authors: "Investor",
    short_description:
      "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts.",
    detailed_description:
      "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.\n" +
      "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.",
    app_image: truecommit,
    landing_page: "https://truecommit.link/",
  },
  {
    id: 3,
    title: "NFARM",
    authors: "Developer",
    short_description:
      "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation.",
    detailed_description:
      "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.\n" +
      "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.",
    app_image: nfarm,
    landing_page:
      "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
  },
  {
    id: 4,
    title: "INFILMART",
    authors: "Developer",
    short_description:
      "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional;",
    detailed_description:
      "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.\n" +
      "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.",
    app_image: infilmart,
    landing_page:
      "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
  },
  {
    id: 5,
    title: "FIDORA",
    authors: "Visitor",
    short_description:
      "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.",
    detailed_description:
      "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.\n" +
      "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.\n" +
      "0.5 Stars\n",
    app_image: fidora,
    landing_page:
      "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
  },
  {
    id: 6,
    title: "HUITZIL",
    authors: "Developer",
    short_description:
      "No code experience. Anyone can create helpful smart contracts within minutes.",
    app_image: huitzil,
    detailed_description:
      "Huitzil brings people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.",
    landing_page:
      "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
  },
  {
    id: 7,
    title: "TUPAN",
    authors: "Developer",
    short_description:
      "The Tupan Token was born to simply and assertively, achieve the necessary transition to a regenerative and circular economy.",
    detailed_description:
      "The Tupan Token was born to simply and assertively, achieve the necessary transition to a regenerative and circular economy. By joining the high technology of cryptocurrencies and the blockchain network, with the most extraordinary demands of the century, Tupan brings you the opportunity to make a difference in the environment while enjoying an investment with a high potential for appreciation.",
    app_image: tupan,
    landing_page: "https://www.tupan.io/",
  },
  {
    id: 8,
    title: "AVINOC",
    authors: "Developer",
    short_description:
      "AVINOC is a tokenization company dedicated to integrating new technologies in aviation.",
    detailed_description:
      "AVINOC is a tokenization company dedicated to integrating new technologies in aviation. It’s driving change and transformation throughout the entire industry. The innovative tokenization services and projects led by AVINOC are designed to connect the legacy system and the crypto-economy into a single functional, transparent and highly secure ecosystem.",
    app_image: avinoc,
    landing_page: "https://avinoc.com/",
  },
];

export default function PublicProjects() {
  return (
    <>
      <Navbar />
      <NextSeo
        title="ZENCON Launchpad | Incoming next"
        shortDescription="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
      />

      <main className="relative min-h-screen overflow-hidden page-wrapper bg-[#010222]">
        <div className="pt-[200px] 1024px:pt-[150px] flex flex-col lg:gap-14 gap-10 pb-32 1024px:pb-[45px] 1024px:px-[30px]">
          <div className="flex flex-col items-center justify-center lg:gap-8 gap-4 max-w-[800px] mx-auto text-center">
            <Heading level="1">What is running on the Smart Chain?</Heading>
            <Paragraph text="Get a sneak peek on some of the most innovative projects deployed to our Smart Chain during ZENCON22." />
          </div>
          <div className="flex 480px:flex-col justify-around border border-[#87FF4F] xl:w-[1000px] lg:w-[900px] sm:w-[600px] w-full max-w-[800px] 480px:py-8 480px:w-[180px] 480px:gap-8 mx-auto lg:p-10 sm:p-5 p-4">
            <div className="text-center 480px:flex 480px:flex-col 480px:gap-2">
                <Heading level="2">23,429</Heading>
                <Paragraph text="Followers" />
            </div>
            <div className=" 480px:flex 480px:flex-col 480px:gap-2 text-center border-l border-r 480px:border-0 480px:border-t 480px:border-b 480px:py-10 480px:px-0 border-[#324463] lg:px-[90px] sm:px-[40px] px-[30px] ">
                <Heading level="2">4,801,690</Heading>
                <Paragraph text="Avg. Tx daily" />
            </div>
            <div className="text-center 480px:flex 480px:flex-col 480px:gap-2">
                <Heading level="2">08</Heading>
                <Paragraph text="Projects" />
            </div>
          </div>
        </div>

        {/* Projects Listed */}

        <div className="w-full">
          <div className="max-w-[1030px] px-[30px] flex flex-col mx-auto gap-14 projecs-listed">
            <div className="text-center">
                <Heading level="2">Projects Listed</Heading>
            </div>
            <div className="grid grid-cols-1 pb-[75px] lg:pb-[130px] lg:grid-cols-3 sm:grid-cols-2 justify-items-center gap-4 lg:gap-8 640px:px-[30px]">
              {items.map((project, index) => (
                <div className="w-full height-full" key={index}>
                  <div className="h-full">
                    <div className="flex flex-col justify-between h-full bg-white bg-opacity-20">
                      <div className="w-fit">
                        <Image
                          src={project.app_image}
                          alt="project logo"
                        />
                      </div>
                      <h3 className="font-bold pb-2 pt-4 capitalize sm:text-[20px] font-Hanson text-[18px] text-center text-white px-4">
                        {project.title}
                      </h3>
                      <p className="px-4 text-[18px] text-justify text-white opacity-100 text-md">
                        {project.short_description}
                      </p>

                      <div className="mt-12 mb-8 font-normal text-[#667085]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
