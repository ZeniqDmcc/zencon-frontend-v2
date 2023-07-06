import Link from "next/link";
import EnvelopeSimple from "../../public/assets/status_icons/EnvelopeSimple.svg";
import Globe from "../../public/assets/status_icons/Globe.svg";
import Paragraph from "../Atoms/Paragraph/Paragraph";
import StatusCircle from "../StatusCircle/StatusCircle";

import Image from "next/image";
import DiscordLogo from "../../public/assets/status_icons/DiscordLogo.svg";
import FacebookLogo from "../../public/assets/status_icons/FacebookLogo.svg";
import InstagramLogo from "../../public/assets/status_icons/InstagramLogo.svg";
import LinkedinLogo from "../../public/assets/status_icons/LinkedinLogo.svg";
import Container from "../Container/Container";

function ContactDetails({ firstName, lastName, email,status }) {
  const headingStyle =
    "font-Hanson text-[#87FF4F] text-[32px] font-bold leading-[40px] 1024px:text-2xl 767px:text-xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6";
  const ButtonLaunchpad =
    "font-Hanson uppercase font-normal text-[16px] leading-[16.16px] text-center w-[320px] h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]";

  return (
    <Container>
      <div className="flex flex-col gap-16">
        {/* Progress Bar */}
        <div className="">
          <StatusCircle status={status} />
        </div>
        {/* User Details */}
        <div className="flex flex-col gap-2 text-center md:gap-6 md:text-left 767px:w-[90%] 767px:mx-auto">
          <h1 className={headingStyle}>Hi &#128075; {firstName} {lastName}</h1>
          <Paragraph text="You successfully registered in ZENCON-2023 Rio de Janeiro &#128640; &#128640; &#128640;" />
          <Paragraph text="For more information and details feel free to reach out to us via these contact details." />
          <div className="flex flex-col items-end gap-32 767px:gap-10 text-center 767px:mt-[20px] text-white md:flex-row md:text-left">
              <div className="flex flex-col gap-3 mt-5 767px:w-full 767px:justify-cneter 767px:items-cnter">
                <Link href="mailto:hello@zencon.io" passHref>
                  <span className="text-[#fff] flex items-center gap-3 font-[300] font-HeronSans 767px:justify-center">
                    <Image src={EnvelopeSimple} alt="Email"></Image>
                    {email}
                  </span>
                </Link>
                <Link href="https://launchpad.zencon.io/" passHref>
                  <span className="text-[#fff] flex items-center gap-3 font-[300] font-HeronSans 767px:justify-center">
                    <Image
                      src={Globe}
                      alt="Globe"
                    ></Image> launchpad.zencon.io
                  </span>
                </Link>
              </div>
            <div className="flex justify-center gap-3 md:justify-start 767px:w-full">
              <div className="cursor-pointer">
                <Link href="https://www.facebook.com/zenconhackathon">
                  <>
                    <Image src={FacebookLogo} alt="Facebook"></Image>
                  </>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="https://www.instagram.com/zencon.io/">
                  <>
                    <Image src={LinkedinLogo} alt="Linkedin"></Image>
                  </>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="https://www.linkedin.com/company/zencon-hackathon">
                  <>
                    <Image src={InstagramLogo} alt="Instagram"></Image>
                  </>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="https://discord.gg/YfM7ZZG5Wz">
                  <>
                    <Image src={DiscordLogo} alt="Discord"></Image>
                  </>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactDetails;
