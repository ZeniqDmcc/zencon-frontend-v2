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
              <div className={styles.ecosystem__inner}>
                  <div className={styles.box} key={nanoid()}>
                      <h2 className={styles.heading}>{props.title}</h2>
                      <p className={styles.paragrapgh}>{props.shortDescription}</p>
                      <p className={styles.paragrapgh}>{props.detailDescription}</p>
                      <div className={styles.button__outer}>
                        <Button label='More Informations' href="#"/>
                      </div> 
                  </div>

                  <div className={styles.box} key={nanoid()}>
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
