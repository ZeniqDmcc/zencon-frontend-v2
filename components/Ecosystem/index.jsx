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
              <div className={`${styles.image} flex lg:flex-row flex-col lg:p-12 p-5 bg-white bg-opacity-25 shadow-lg rounded-lg border border-opacity-25 border-white backdrop-blur-md w-full items-center sm:mb-0 mb-16`}>
                  <div className="flex order-2 flex-col lg:gap-12 gap-2 flex-1" key={nanoid()}>
                    <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-medium text-green-400 leading-16 lg:text-left text-center">{props.title}</h2>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.shortDescription}</p>
                    <p className="w-90 leading-1.5 xl:text-2xl md:text-lg text-md font-normal lg:text-left text-center">{props.detailDescription}</p>
                    <div className={styles.button__outer}>
                      <Button className="" label='More Information' href="https://zeniq.com/ecosystem"/>
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
    title: "Join the ZENIQ Ecosystem and Existing projects",
    shortDescription: "Are you interested in joining the ZENIQ ecosystem and contributing to existing projects? ZENCON Rio de Janeiro 2023 is the perfect opportunity to collaborate with other developers and make a difference in the world of blockchain.",
    detailDescription: "With existing projects like Tupan, Regardless, Avinoc, and SIDI, there's no shortage of opportunities to get involved and make a difference. Whether you're interested in contributing to existing projects or developing your own, the hackathon is the perfect opportunity to showcase your skills and make your mark on the world of blockchain.",
    icon: graph3 
}
