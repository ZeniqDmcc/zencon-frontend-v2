import Image from "next/image"
import styles from "./development.module.css"
import Button from "../Button"
import { nanoid } from "nanoid"
import graph4cr from "../../assets/graph4cr.png"

function Development(props) {
  return (
    <div className={styles.development}>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
                <div className="flex-1 justify-center flex items-center lg:py-10" key={nanoid()}>
                    {/* <Image src={props.image} alt="Nft" /> */}
                </div>

                <div className="flex-1 flex flex-col lg:gap-12 gap-6" key={nanoid()}>
                    <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-normal text-green-400 leading-16 lg:text-left text-center">{props.title}</h2>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.shortDescription}</p>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.detailDescription}</p>
                    <div className="button__outer">
                        <Button label="More Information" href="https://launchpad.zencon.io/" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Development

Development.defaultProps = {
    title: " Take Your Development Skills to the Next Level",
    shortDescription: "Are you ready to take your development skills to the next level? ZENCON Rio de Janeiro 2023 is the perfect opportunity to learn new skills, collaborate with other developers, and showcase your work on a global stage.",
    detailDescription: "With challenges that range from building advanced projects to migrating and integrating with the ZENIQ smartchain, the hackathon is the perfect opportunity to push the boundaries of what's possible with blockchain. Whether you're an experienced developer or just starting out, there's something for everyone at ZENCON Rio de Janeiro 2023.",
    image: graph4cr
}
