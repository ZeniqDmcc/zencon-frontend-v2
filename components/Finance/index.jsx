import Image from "next/image"
import styles from "./finance.module.css"
import { nanoid } from "nanoid"
import graph1 from "../../assets/graph1.svg"

function Finance(props) {
  return (
    <div className={styles.finance}>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className={styles.box} key={nanoid()}>
                    <h2 className="text-4xl font-normal text-green-400 leading-9">{props.title}</h2>
                    <p className="w-90 leading-1.5 text-base lg:text-lg">{props.traditionalBanking}</p>
                    <p className="w-90 leading-1.5 text-base lg:text-lg">{props.challenges}</p>
                </div>

                <div className="box box__2" key={nanoid()}>
                    <Image src={props.src} alt="icon"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Finance

Finance.defaultProps = {
    title: "Discover the Power of Decentralized Finance",
    traditionalBanking: "Say goodbye to traditional banking and hello to a new era of decentralized finance. Zencon Rio 2023 is your chance to explore the potential of blockchain and create tools that allow anyone with internet access to lend, borrow, and bank without the need for middlemen.",
    challenges: "With challenges ranging from building yield protocols to developing trading bots and DAO makers, the possibilities are endless. Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to learn new skills and push the boundaries of what's possible with decentralized finance.",
    src: graph1
}