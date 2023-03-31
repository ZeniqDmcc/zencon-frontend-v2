import { nanoid } from 'nanoid';
import Image from 'next/image';
import styles from "./card.module.css";
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.card__boxes__outer}>
        <div className="container mx-auto">
          <div className={styles.container}>
              <div className={styles.card__boxes__inner}>
              {
                  cardData.map((item) => {
                      return <div className={styles.card__box} key={nanoid()}>
                          <Image src={item.icon} alt="icon" height={80} />
                          <h3 className={styles.heading}>{item.title}</h3>
                          <p className={styles.pargraph}>{item.description}</p>
                      </div>
                  })
              }
              </div> 
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

export default Card;
