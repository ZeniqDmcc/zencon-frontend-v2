import Button from "../Button"
import styles from './banner.module.css'
import { nanoid } from 'nanoid'
import { useUserDataContext } from "../../context/UserDataContextProvider"

function Banner(props) {
    const {isAuthed} = useUserDataContext();
    const redirectUrl = isAuthed?"/dashboard":"/authentication";
    console.log(redirectUrl,isAuthed)
    return (
      <div className="flex items-end justify-center" key={nanoid()}>
          <div className="container">
            <div className={styles.banner__inner}>
                <div className={styles.box}>
                    <h1 className={styles.heading}>{props.title}</h1>
                    <p className={styles.paragraph}>{props.description}</p>
                    <div className={styles.button__outer}>
                        <Button label='Participate Rio 2023' href={redirectUrl}/>
                        <Button label='More Informations' href="#"/>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}

Banner.defaultProps = {
    title: "Join the Global Hackathon to Shape the Future of Finanace",
    description: "Are you ready to take on the challenge and compete against some if the world's most innovative developers? Zencon Rio 2023 is the perfect opportunity to showcase your skills and make a name for yourself in the world of blockchain and finance. With a prize pool of $100,000 USD up for grabs, the competition is fierce and the shakes are high."
}

export default Banner