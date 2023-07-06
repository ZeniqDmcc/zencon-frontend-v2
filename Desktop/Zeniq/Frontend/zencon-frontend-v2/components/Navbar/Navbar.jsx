import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import CallToAction from "../Buttons/CallToAction";
import Container from "../Container/Container";
import logo from "../../public/assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { userWallet, userType } = useUserDataContext();

  const eventDate =
    "font-HeroSansRegular mx-auto my-auto lg:pl-[50px] px-2 text-[20px] laptop:text-lg leading-7 tracking-tighter text-[#87FF4F] z-10 mobile:hidden";
  const navOuter =
    "bg-[#000E2A] text-white font-extrabold font-primary fixed w-full z-10";
  const inner = "flex items-center justify-between";
  const navItem =
    "font-HeroSansRegular text-white text-[18px] font-[400] hover:text-[#A1E285] smol:hidden";

  return (
    <nav id="navbar" className={navOuter}>
      <Container>
        <div className={inner}>
          <div className="">
            <div className="flex cursor-pointer">
              <Link href="/" scroll={false}>
                <a>
                  <Image src={logo} alt="ZENCON" priority={true} />
                </a>
              </Link>
              <h1 className={eventDate}>
                Sep 16 - 21, <br />
                2023
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-[21px]">
            <Link href="/" scroll={false}>
              <a
                className={`${
                  router.pathname === "/" && "route-active"
                } ${navItem}`}
              >
                Home
              </a>
            </Link>
            <Link href={"/public-projects"}>
              <a
                className={`${
                  router.pathname === "/public-projects" && "route-active"
                } ${navItem}`}
              >
                Projects
              </a>
            </Link>
            <Link href={"/documents"}>
              <a
                className={`${
                  router.pathname === "/documents" && "route-active"
                } ${navItem}`}
              >
                Documentation
              </a>
            </Link>
            {userType === "Developer" && (
              <a className={`py-2 smol:hidden`}>
                <CallToAction
                  text="Submit Your Project"
                  link="/upload-project"
                  classes="w-full"
                  active={
                    router.pathname.includes("upload-project") ||
                    router.pathname.includes("confirmation-page")
                  }
                />
              </a>
            )}
            {userWallet && (
              <div className="py-2 smol:hidden">
                <CallToAction
                  text="Dashboard"
                  link={
                    userType === "Mentor" ? "/mentor-dashboard" : "/dashboard"
                  }
                  classes="w-full p-32"
                  active={router.pathname.includes("dashboard")}
                />
              </div>
            )}
            <div className="smol:hidden">
              <CallToAction
                text={userWallet ? "Logout" : "Login"}
                link={userWallet ? "/logout" : "/authentication"}
                classes="w-full"
              />
            </div>

            <div className="hidden -mr-2 smol:block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md font-HeroSansRegular hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block w-6 h-6"
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
                  className="hidden w-6 h-6"
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
        <div className="hidden transition-all smol:block" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 font-HeronSans sm:px-34">
            <Link href="/">
              <div
                className={`${
                  router.pathname === "/" && "route-active"
                } cursor-pointer`}
              >
                <a className="block px-3 py-2 font-medium text-center rounded-md">
                  Home
                </a>
              </div>
            </Link>

            <Link href={"/public-projects"}>
              <div
                className={`${
                  router.pathname === "/public-projects" && "route-active"
                } cursor-pointer`}
              >
                <a className="block px-3 py-2 font-medium text-center rounded-md font-HeronSans">
                  Projects
                </a>
              </div>
            </Link>

            <Link href={"/documents"}>
              <div
                className={`${
                  router.pathname === "/documents" && "route-active"
                } cursor-pointer`}
              >
                <a className="block px-3 py-2 font-medium text-center rounded-md font-HeronSans">
                  Documentation
                </a>
              </div>
            </Link>
            <div className="hidden smol:block">
              {userType === "Developer" && (
                <a className="block py-2">
                  <div className="block">
                    <CallToAction
                      text="Submit Your Project"
                      link="/upload-project"
                      classes="w-full sm:w-full font-HeronSans"
                      active={
                        router.pathname.includes("upload-project") ||
                        router.pathname.includes("confirmation-page")
                      }
                    />
                  </div>
                </a>
              )}
              {userWallet && (
                <div className="block py-2">
                  <CallToAction
                    text={"Dashboard"}
                    link={
                      userType === "Mentor" ? "/mentor-dashboard" : "/dashboard"
                    }
                    classes="w-full sm:w-full  font-HeroSansRegular"
                    active={router.pathname.includes("dashboard")}
                  />
                </div>
              )}
              <div className="block py-2">
                <CallToAction
                  text={userWallet ? "Logout" : "Login"}
                  link={userWallet ? "/logout" : "/authentication"}
                  classes="w-full sm:w-full font-HeroSansRegular"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
