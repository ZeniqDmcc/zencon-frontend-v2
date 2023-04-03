import Image from "next/image"
import { nanoid } from "nanoid"
import styles from "./nft.module.css"
import graph2 from "../../assets/graph2.svg"

function Nft(props) {
  return (
    <div className={styles.nft}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
              <div className={styles.box} key={nanoid()}>
                  <Image src={props.image} alt="Nft" />
              </div>
              <div className={styles.box} key={nanoid()}>
                  <h2 className={styles.heading}>{props.title}</h2>
                  <p className={styles.paragrapgh}>{props.shortDescription}</p>
                  <p className={styles.paragrapgh}>{props.detailDescription}</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Nft


Nft.defaultProps = {
      title: "Discover the Power of Decentralized Finance",
      shortDescription: "Say goodbye to traditional banking and hello to a new era of decentralized finance. Zencon Rio 2023 is your chance to explore the potential of blockchain and create tools that allow anyone with internet access to lend, borrow, and bank without the need for middlemen.",
      detailDescription: "With challenges ranging from building yield protocols to developing trading bots and DAO makers, the possibilities are endless. Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to learn new skills and push the boundaries of what's possible with decentralized finance.",
      image: graph2
}
