import Image from "next/image"
import styles from "./finance.module.css"
import { nanoid } from "nanoid"
import graph1 from "../../assets/graph1.svg"

function Finance(props) {
  return (
    <div className={`${styles.finance} xl:py-36 px-8`}>
        <div className="container mx-auto">
            <div className="flex justify-between lg:gap-0 gap-16 flex-col lg:flex-row">
                <div className="lg:flex-1 lg:order-1 order-2 flex flex-col gap-12" key={nanoid()}>
                    <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-normal text-green-400 leading-16">{props.title}</h2>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal">{props.traditionalBanking}</p>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal">{props.challenges}</p>
                </div>

                <div className="lg:flex-1 lg:order-2 order-1 text-center lg:p-0 px-12" key={nanoid()}>
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