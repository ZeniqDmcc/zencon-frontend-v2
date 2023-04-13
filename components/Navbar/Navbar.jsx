import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import CallToAction from "../Buttons/CallToAction";
import {GradientScroll} from "../GradientScroll/GradientScroll";
import {useUserDataContext} from "../../context/UserDataContextProvider";
import {developer, investor} from "../../public/assets/home";
import zeniq from '../../public/assets/zeniq.png'
import zencon_logo from "../../assets/zenconLogo.svg";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const {userWallet, userType} = useUserDataContext();


    return (
        <nav id="navbar" className="bg-[#1B1934FF] text-white font-extrabold font-primary fixed w-full z-10">
            <Container>
                <div className="flex items-center justify-between h-12 my-4">
                    <div className="flex-shrink-0">
                        <div className=" cursor-pointer mt-2">
                            <Link href="/" scroll={false}>
                                <a>
                                    <Image
                                        src={zencon_logo}
                                        alt="zencon"
                                        width={150}
                                        height={100}
                                        priority={true}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <Link href="/" scroll={false}>
                            <a
                                className={`${
                                    router.pathname === "/" && "route-active"
                                } px-3 py-2 text-sm font-medium hover:text-[#F4A12FFF] smol:hidden`}
                            >
                                Home
                            </a>
                        </Link>
                        <Link href={"/public-projects"}>
                            <a
                                className={`${
                                    router.pathname === "/public-projects" && "route-active"
                                } px-3 py-2 text-sm font-medium hover:text-[#F4A12FFF] smol:hidden`}
                            >
                                Projects
                            </a>
                        </Link>
                        <Link href={"/documents"}>
                            <a
                                className={`${
                                    router.pathname === "/documents" && "route-active"
                                } px-3 py-2 text-sm font-medium hover:text-[#F4A12FFF] smol:hidden`}
                            >
                                Documentation
                            </a>
                        </Link>
                        {userType === "Developer" && <a
                            className={`py-2 800px:hidden`}
                        >
                            <CallToAction
                                text="Submit Your Project"
                                link="/upload-project"
                                classes='w-full'
                                active={(router.pathname.includes("upload-project") || router.pathname.includes("confirmation-page"))}
                            />
                        </a>}
                        {userWallet &&
                            <div className='py-2 800px:hidden'>
                                <CallToAction
                                    text="Dashboard"
                                    link={userType === "Mentor" ? "/mentor-dashboard" : "/dashboard"}
                                    classes="w-full"
                                    active={router.pathname.includes("dashboard")}
                                />
                            </div>
                        }
                        <div className="800px:hidden">

                            <CallToAction
                                text={userWallet ? "Logout" : "Login"}
                                link={userWallet ? "/logout" : "/authentication"}
                                classes="w-full"
                            />
                        </div>

                        <div className='navbar-image'>{userWallet ?
                            <Image src={userType === "Developer" ? developer : investor} alt="zeniq" width={40}
                                   height={40}
                                   priority={true}/> :
                            <Image src={zeniq} alt="zeniq" width={40}
                                   height={40}
                                   priority={true}/>
                        }
                        </div>

                        <div className="-mr-2 flex hidden smol:block">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>

                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

            {isOpen && (
                <div className="hidden smol:block transition-all" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-34">
                        <Link href="/">
                            <div className={`${router.pathname === "/" && "route-active"} cursor-pointer`}>

                                <a className="block px-3 py-2 rounded-md text-center font-medium">
                                    Home
                                </a>
                            </div>

                        </Link>

                        <Link href={"/public-projects"}>
                            <div
                                className={`${router.pathname === "/public-projects" && "route-active"} cursor-pointer`}>

                                <a className="block px-3 py-2 rounded-md text-center font-medium">
                                    Projects
                                </a>
                            </div>

                        </Link>

                        <Link href={"/documents"}>
                            <div className={`${router.pathname === "/documents" && "route-active"} cursor-pointer`}>
                                <a className="block px-3 py-2 rounded-md text-center font-medium">
                                    Documentation
                                </a>
                            </div>
                        </Link>
                        <div className="hidden 800px:block">
                            {userType === "Developer" && <a
                                className='py-2 block'
                            >
                                <div className="block">
                                    <CallToAction
                                        text="Submit Your Project"
                                        link="/upload-project"
                                        classes="w-full sm:w-full"
                                        active={(router.pathname.includes("upload-project") || router.pathname.includes("confirmation-page"))}
                                    />
                                </div>
                            </a>}
                            {userWallet &&
                                <div
                                    className='py-2 block'>
                                    <CallToAction
                                        text={"Dashboard"}
                                        link={userType === "Mentor" ? "/mentor-dashboard" : "/dashboard"}
                                        classes="w-full sm:w-full"
                                        active={router.pathname.includes("dashboard")}
                                    />
                                </div>
                            }
                            <div className="py-2 block">
                                <CallToAction
                                    text={userWallet ? "Logout" : "Login"}
                                    link={userWallet ? "/logout" : "/authentication"}
                                    classes="w-full sm:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <GradientScroll/>
        </nav>
    );
}

export default Navbar;
