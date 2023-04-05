import Image from "next/image"
import styles from "./development.module.css"
import Button from "../Button"
import { nanoid } from "nanoid"
import graph4cr from "../../assets/graph4cr.png"

function Development(props) {
  return (
    <div className={styles.development}>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between lg:gap-12 gap-12">
                <div className="flex-1 justify-center flex items-center py-10" key={nanoid()}>
                    <Image src={props.image} alt="Nft" />
                </div>

                <div className="flex-1 flex flex-col lg:gap-12 gap-6" key={nanoid()}>
                    <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-normal text-green-400 leading-16">{props.title}</h2>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal">{props.shortDescription}</p>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal">{props.detailDescription}</p>
                    <div className="button__outer">
                        <Button label="More information" href="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Development

Development.defaultProps = {
    title: "Discover the Power of Decentralized Finance",
    shortDescription: "Say goodbye to traditional banking and hello to a new era of decentralized finance. Zencon Rio 2023 is your chance to explore the potential of blockchain and create tools that allow anyone with internet access to lend, borrow, and bank without the need for middlemen.",
    detailDescription: "With challenges ranging from building yield protocols to developing trading bots and DAO makers, the possibilities are endless. Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to learn new skills and push the boundaries of what's possible with decentralized finance.",
    image: graph4cr
}
