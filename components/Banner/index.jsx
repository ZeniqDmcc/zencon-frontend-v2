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
                <div className="flex flex-col items-center gap-4 lg:gap-10 sm:gap-5">
                    <span className='px-2 text-2xl xl:text-4xl lg:text-5xl md:text-3xl sm:text-2xl text-center tracking-tighter text-green-400 z-10'>September 16 - 21, 2023</span>
                    <h1 className="w-3/5 text-2xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-center tracking-tighter text-white-400 z-10">{props.title}</h1>
                    <p className="text-lg xl:text-2xl md:text-xl sm:text-lg text-center sm:leading-8 leading-6 sm:max-w-7xl mx-auto block z-10">{props.description}</p>
                    <div className="flex flex-col md:flex-row sm:mt-0 gap-4 mt-2">
                        <Button label='Register / Login' href={redirectUrl}/>
                        <Button label='More Information' href="/more-information"/>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}

Banner.defaultProps = {
    title: "Join the Global Hackathon to Shape the Future of Finance",
    description: "Are you ready to take on the challenge and compete against some of the world's most innovative developers? ZENCON Rio de Janeiro 2023 is the perfect opportunity to showcase your skills and make a name for yourself in the world of blockchain and finance. With a prize pool of 100,000 USDT, the competition is fierce, and the stakes are high."
}

export default Banner