import { nanoid } from "nanoid";
import Image from "next/image";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import styles from "./card.module.css";
import CardContent from "../Molecules/Content/CardContent";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className="container flex mx-auto">
        <div className="flex flex-col gap-8 lg:flex-1 lg:flex-row">
          {cardData &&
            cardData.map((item) => {
              return (
                <CardContent
                  key={nanoid()}
                  ImageSrc={item.icon}
                  ImageAlt={item.alt}
                  HeadingText={item.title}
                  ParagraphText={item.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    icon: icon1,
    alt: "Card Icon",
    title: "Sustainability",
    description:
      "Our focus is on developing blockchain-based projects that are not only stable and scalable, but also environmentally sustainable and socially responsible. We believe that by building projects that are designed to last, we can help to create a more sustainable future for all.",
  },
  {
    icon: icon2,
    alt: "Card Icon",
    title: "Decentralization",
    description:
      "We are committed to creating truly decentralized systems that are open, transparent, and accessible to all. By removing intermediaries and creating peer-to-peer networks, we can ensure that power is distributed fairly and that everyone has an equal say in the decisions that affect them.",
  },
  {
    icon: icon3,
    alt: "Card Icon",
    title: "Security",
    description:
      "We take security seriously and understand the importance of protecting digital assets. Our projects are designed with the highest levels of security in mind, using cutting-edge technology and robust protocols to ensure that assets are kept safe and secure at all times.",
  },
];

export default Card;
