import { nanoid } from "nanoid";
import graph3 from "../../assets/graph3.png";
import CustomButton from "../Atoms/Button/CustomButton";
import CustomImage from "../Atoms/Image/CustomImage";
import GlobalContent from "../Molecules/Content/GlobalContent";
import styles from "./ecosystem.module.css";

function Ecosystem(props) {
  return (
    <div className={styles.ecosystem}>
      <div className="container mx-auto">
        <div className="{`${styles.image} flex lg:flex-row flex-col lg:px-12 p-5 bg-white bg-opacity-25 shadow-lg rounded-lg border border-opacity-25 border-white backdrop-blur-md w-full items-center sm:mb-0 mb-16`}">
          <div className="flex justify-end w-2/4">
            <CustomImage key={nanoid()} src={props.icon} alt={props.alt} />
          </div>
          <div className="flex flex-col w-2/4 gap-12">
            <GlobalContent
              className="lg:flex-1"
              GlobalContentHeading={props.title}
              Paragraph1={props.shortDescription}
              Paragraph2={props.detailDescription}
              key={nanoid()}
            />
            <CustomButton text="More Information" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;

Ecosystem.defaultProps = {
  title: "Join the ZENIQ Ecosystem and Existing projects",
  shortDescription:
    "Are you interested in joining the ZENIQ ecosystem and contributing to existing projects? ZENCON Rio de Janeiro 2023 is the perfect opportunity to collaborate with other developers and make a difference in the world of blockchain.",
  detailDescription:
    "With existing projects like Tupan, Regardless, Avinoc, and SIDI, there's no shortage of opportunities to get involved and make a difference. Whether you're interested in contributing to existing projects or developing your own, the hackathon is the perfect opportunity to showcase your skills and make your mark on the world of blockchain.",
  icon: graph3,
  alt: "Ecosystem",
};
