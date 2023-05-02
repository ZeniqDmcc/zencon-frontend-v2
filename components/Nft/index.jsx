import Image from "next/image"
import { nanoid } from "nanoid"
import styles from "./nft.module.css"
import graph2 from "../../assets/graph2.svg" 

function Nft(props) {
  return (
    <div className={styles.nft}>
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-12 justify-between items-center pt-1">
              <div className="flex-1" key={nanoid()}>
                  <Image src={props.image} alt="Nft" />
              </div>
              <div className="flex-1 flex flex-col gap-12 lg:mt-0 sm:mt-2" key={nanoid()}>
                  <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-normal text-green-400 leading-16 lg:text-left text-center">{props.title}</h2>
                  <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.shortDescription}</p>
                  <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.detailDescription}</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Nft


Nft.defaultProps = {
      title: "Unlock the potential of NFTs and Web 3.0",
      shortDescription: "Are you ready to take NFTs and web 3.0 to the next level? ZENCON Rio de Janeiro 2023 is your chance to showcase your skills and create tools that go beyond owning pictures. With challenges that include developing NFT-based games and creating marketplaces for art, the possibilities are endless.",
      detailDescription: `Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to explore the potential of NFTs and web 3.0. With a global community of like-minded individuals, you'll have the support you need to take your ideas to the next level.`,
      image: graph2
}
 