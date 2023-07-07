import { nanoid } from "nanoid"
import Image from "next/image"
import CoinMockup from "../../assets/CoinMockup.png"
import coin2 from "../../assets/coin2.png"
import Button from "../Button"
import styles from "./development.module.css"
import CustomImage from "../Atoms/Image/CustomImage"
import GlobalContent from "../Molecules/Content/GlobalContent"
import CustomButton from "../Atoms/Button/CustomButton"

function Development(props) {
  return (
    <div className={styles.development}>
        <div className="container mx-auto">
            <div className="flex flex-col justify-between gap-12 lg:flex-row">
                <div className={`${styles.image} flex-1 justify-center lg:justify-start flex items-center lg:py-10`} key={nanoid()}>
                    <CustomImage src={CoinMockup} alt={Development} />
                    <CustomImage src={coin2} alt={Development} />
                </div>

                <div className="flex flex-col flex-1 gap-6 lg:gap-12" key={nanoid()}>
                    <GlobalContent 
                        GlobalContentHeading={props.title}
                        Paragraph1={props.shortDescription}
                        Paragraph2={props.detailDescription}
                        key={nanoid()}
                    />
                    <CustomButton 
                        href="/more-information"
                        text="More Information"
                    />
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
    image: CoinMockup,
    image2: coin2,
    alt: "Development"
}
