import { nanoid } from 'nanoid'
import { useUserDataContext } from "../../context/UserDataContextProvider"
import Button from "../Button"

function Banner(props) {
    const {isAuthed} = useUserDataContext();
    const redirectUrl = isAuthed?"/register":"/authentication";
    return (
      <div className="flex items-end justify-center" key={nanoid()}>
          <div className="container">
            <div className="flex items-end justify-center h-screen">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="w-3/5 text-6xl text-center tracking-tighter text-white-400">{props.title}</h1>
                    <p className="text-2xl text-center leading-8 max-w-7xl mx-auto block">{props.description}</p>
                    <div className="flex gap-4">
                        <Button label='Participate Rio 2023' href={redirectUrl}/>
                        <Button label='More Informations' href="#slideshow"/>
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