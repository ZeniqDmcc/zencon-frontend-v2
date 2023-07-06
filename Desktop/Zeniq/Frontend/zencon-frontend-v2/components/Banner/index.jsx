import { nanoid } from "nanoid";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import CustomButton from "../Atoms/Button/CustomButton";
import GreenButton from "../Atoms/Button/GreenButton";
import BannerContent from "../Molecules/Content/BannerContent";
import PrizePool from "../Molecules/PrizePool/PrizePool";

const BannerInner = "flex flex-col gap-6 1024px:gap-3 items-center justify-center pt-[380px] 640px:pt-[350px] text-center"

function Banner(props) {
  const { isAuthed } = useUserDataContext();
  const redirectUrl = isAuthed ? "/dashboard" : "/authentication";
  return (
    <div className="flex items-end justify-center 1600px:px-20 1024px:px-0" key={nanoid()}>
      <div className="container 640px:max-w-[100%] 1440px:px-[30px]">
        <div className={BannerInner}>
            <BannerContent 
                labelText="September 16 - 21, 2023"
                headingText="Join the Global Hackathon to Shape the Future of Finance"
                paragraphText="Are you ready to take on the challenge and compete against some of the world's most innovative developers? ZENCON Rio de Janeiro 2023 is the perfect opportunity to showcase your skills and make a name for yourself in the world of blockchain and finance. With a prize pool of 100,000 USDT, the competition is fierce, and the stakes are high."
            />
            <PrizePool />
            <div className="flex gap-5 1024px:flex-col">
              <GreenButton href={redirectUrl} text="Register / Login" />
              <CustomButton href="/more-information" text="More Details" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
