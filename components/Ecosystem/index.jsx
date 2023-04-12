import Image from "next/image"
import styles from "./ecosystem.module.css"
import { nanoid } from "nanoid"
import Button from "../Button"
import graph3 from "../../assets/graph3.png"

function Ecosystem(props) {
  return (
    <div className={styles.ecosystem}>
        <div className="container mx-auto">
          <div className={styles.container}>
              <div className="flex lg:flex-row flex-col lg:p-12 p-5 bg-white bg-opacity-25 shadow-lg rounded-lg border border-opacity-25 border-white backdrop-blur-md w-full items-center">
                  <div className="flex order-2 flex-col lg:gap-12 gap-2 flex-1" key={nanoid()}>
                    <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-normal text-green-400 leading-16 lg:text-left text-center">{props.title}</h2>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.shortDescription}</p>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.detailDescription}</p>
                    <div className={styles.button__outer}>
                      <Button className="" label='More Informations' href="#slideshow"/>
                    </div> 
                  </div>

                  <div className="flex-1 order-1" key={nanoid()}>
                      <Image src={props.icon} alt="Nft" />
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Ecosystem

Ecosystem.defaultProps = {
    title: "Discover the Power of Decentralized Finance",
    shortDescription: "Say goodbye to traditional banking and hello to a new era of decentralized finance. Zencon Rio 2023 is your chance to explore the potential of blockchain and create tools that allow anyone with internet access to lend, borrow, and bank without the need for middlemen.",
    detailDescription: "With challenges ranging from building yield protocols to developing trading bots and DAO makers, the possibilities are endless. Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to learn new skills and push the boundaries of what's possible with decentralized finance.",
    icon: graph3 
}
