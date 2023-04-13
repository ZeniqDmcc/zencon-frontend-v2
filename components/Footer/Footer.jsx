import Image from "next/image";
import Link from "next/link";
import {discord, telegram, twitter,} from "../../public/assets/socialicons";
import SocialIcon from "../Icons/SocialIcon";
import zencon_logo from "../../assets/zenconLogo.svg";
import {GradientScroll} from "../GradientScroll/GradientScroll";

export default function Footer() {
    return (
        <footer className="py-0 text-white bg-[#010020]">
            <GradientScroll/>
            <div className="w-9/12 mx-auto mt-20">
                <div className="mx-auto my-4 text-center">
                    <Image src={zencon_logo} alt="ledger" width={150} height={100}/>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <SocialIcon link="https://discord.gg/EzEMqcUF" image={discord}/>
                    <SocialIcon link="https://twitter.com/ZENIQ_tech" image={twitter}/>
                    <SocialIcon link="https://t.me/zeniq_hub" image={telegram}/>
                </div>
                <div className="sm:flex sm:items-center sm:justify-center sm:gap-14 py-8">
                    <Link href="https://linktr.ee/ZENIQ">
                        <a className="sm:inline block hover:text-gray-500 text-center sm:my-0 my-4">
                            Join us
                        </a>
                    </Link>
                </div>
                <div className="sm:pb-14 pb-8 text-sm sm:flex sm:items-center sm:justify-center sm:gap-6">
                </div>
            </div>
            <div>
                <p className="text-center pb-10">
                    © Zeniq DMCC {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
