import { nanoid } from 'nanoid';
import Image from 'next/image';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';

const Card = ({ icon, title, description }) => {
  return (
    <div className="lg:py-36 md:py-28 sm:py-24 py-16 px-8">
        <div className="container flex mx-auto py-5">
            <div className="flex lg:flex-1 lg:flex-row flex-col gap-8">
              {
                  cardData.map((item) => {
                      return <div className="backdrop-filter backdrop-blur-sm flex flex-col bg-white bg-opacity-25 rounded-lg border-2 border-solid border-green-400 xl:gap-8 gap-4 2xl:p-16 xl:p-12 lg:p-8 p-8" key={nanoid()}>
                          <Image src={item.icon} alt="icon" className='max-w-max' height={80} width={80} />
                          <h3 className="md:text-3xl text-2xl font-normal sm:leading-10 leading-7">{item.title}</h3>
                          <p className="w-90 leading-1.5 xl:text-xl md:text-md font-normal">{item.description}</p>
                      </div>
                  })
              }
            </div> 
        </div>
    </div>
  );
};

const cardData = [
  {
    icon: icon1,
    title: "Stable and sustainable projects",
    description:
      "Our focus is on developing blockchain-based projects that are not only stable and scalable but also environmentally sustainable and socially responsible. We believe that by building projects that are designed to last we can help to create a more sustainable future for all.",
  },
  {
    icon: icon2,
    title: "Real decentralization",
    description:
      "We are committed to creating truly decentralized systems that are open, transparent, and accessible to all By removing intermediaries and creating poor-to-peer networks, we can ensure that power is distributed fairly and that everyone has an equal say in the decisions that affect them.",
  },
  {
    icon: icon3,
    title: "Highest security for digital assets",
    description:
      "We tako security seriously and understand the importance of protecting digital assets Our projects are designed with the highest levels of security in mind, using cutting -edge technology and robust protocols to ensure that assets are kept sale and socure at all times.",
  },
];

export default Card
