import CustomImage from '../Atoms/Image/CustomImage';
import venue1 from 'assets/Assets_home/venue1.png';
import venue2 from 'assets/Assets_home/venue2.png';
import venue3 from 'assets/Assets_home/venue3.png';
import { useState } from 'react';

function Venue() {
  // Define the Tailwind CSS styles in variables
  const containerStyles = "container mx-auto 1600px:px-[30px] 1280px:px-[70px] 1024px:px-[30px] 767px:px-[20px] 640px:px-[80px] 480px:px-[30px] 640px:max-w-[100%]";
  const flexStyles = "flex gap-8 1280px:gap-6 1024px:gap-4 640px:gap-8 h-[600px] 1440px:h-[550px] 1280px:h-[510px] 1024px:h-[370px] 640px:h-auto 640px:flex-col";
  const imageWrapperStyles = "w-1/3 bg-center 640px:w-full 640px:h-[340px]";

  const [hover, setHover] = useState(null)

  const hoverHandle = (venue) => {
    setHover(venue)
  }

  return (
    <div className={containerStyles}>
      <div className={flexStyles}>
        <div className={`${imageWrapperStyles} venue1`}>
        </div>
        <div className={`${imageWrapperStyles} venue2`}>
        </div>
        <div className={`${imageWrapperStyles} venue3`}>
        </div>
      </div>
      <p className="pt-5 text-[18px] text-center">
        ZENCON Rio 2023 venue: <b>Fairmont Copacabana Hotel</b>
      </p>
    </div>
  );
}

export default Venue;
