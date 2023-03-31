import Image from "next/image"
import styles from "./development.module.css"
import Button from "../Button"
import { nanoid } from "nanoid"
import graph4cr from "../../assets/graph4cr.png"

function Development(props) {
  return (
    <div className="p-20">
        <div className={styles.development__inner}>
            <div className={styles.box} key={nanoid()}>
                <Image src={props.image} alt="Nft" />
            </div>

            <div className={styles.box} key={nanoid()}>
                <h2 className={styles.heading}>{props.title}</h2>
                <p className={styles.paragrapgh}>{props.shortDescription}</p>
                <p className={styles.paragrapgh}>{props.detailDescription}</p>
                <div className="button__outer">
                    <Button label="More information" href="#" />
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
