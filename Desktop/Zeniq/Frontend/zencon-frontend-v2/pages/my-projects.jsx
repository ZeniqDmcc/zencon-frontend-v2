import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import CustomButton from "../components/Atoms/Button/CustomButton";
import CallToAction from "../components/Buttons/CallToAction";
import Container from "../components/Container/Container";
import { LoadingStyled } from "../components/LoadingStyled/LoadingStyled";
import Navbar from "../components/Navbar/Navbar";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { useUserDataContext } from "../context/UserDataContextProvider";
import { api_backend } from "../utils/Constants/BackendURLs";


export default function MyProjects() {

    const {ethAddr, userType, usersProjects, setUsersProjects} = useUserDataContext();

    const authData = {
        user_wallet: ethAddr,
        user_type: userType
    };

    useEffect(() => {
        if (usersProjects === null) {

            if (authData.user_wallet) {

                fetch(`${api_backend}/project/get_projects`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(authData),
                })
                    .then((response) => response.json())
                    .then(data => {
                        if (data?.projects) {
                            setUsersProjects(data.projects);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        }
    }, [authData, usersProjects]);


    if (usersProjects === null) {
        return (
            <LoadingStyled varsToWaitForArray={[usersProjects]} redirectTo={"/"} timeToWait={8000} />
        );
    }

    return (
        <>
            <NextSeo
                title="ZENCON Launchpad | Incoming next"
                description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
            />
            <Navbar/>
            <main className="font-Hanson relative overflow-hidden page-wrapper bg-[#010222]">
                <div className="bg-[#010222] pt-40">
                    <Container>
                        <div className="text-center pb-8 w-max-[50vw] pt-20 bg-[#010222]">
                            <div className="flex flex-row justify-evenly">
                                <div>
                                    <h1 className="font-Hanson mt-45 text-5xl font-extrabold text-center text-white">
                                        Your Projects
                                    </h1>
                                    <p className="font-Hanson sm:text-[20px] text-[18px] w-full mt-6 text-gray-400 font-secondary text-center mb-10">
                                        Here you can interact with your own projects or the ones you are taking part in.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-around">
                                <div className="flex flex-col w-[20%]">
                                    <h1 className="mt-4 text-3xl font-extrabold text-center text-white">
                                        --
                                    </h1>
                                    <p className="font-Hanson sm:text-[20px] text-[18px] w-full mt-2 text-gray-400 text-center mb-10">
                                        Your Followers
                                    </p>
                                </div>
                                <div className="flex flex-col w-[20%]">
                                    <h1 className="mt-4 text-4xl font-extrabold text-center text-white ">
                                        {typeof usersProjects === "object" ? Object.keys(usersProjects)?.length : 0}
                                    </h1>
                                    <p className="font-Hanson sm:text-[20px] text-[18px] w-full mt-2 text-gray-400  text-center mb-10">
                                        Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="w-full pt-20 bg-[#010222]">
                    <div className="container mx-auto text-white justify-center flex items-center">
                        {usersProjects !== "0" && Object.keys(usersProjects)?.length > 0 ? <div
                                className="grid grid-cols-1 mb-12 lg:grid-cols-3 sm:grid-cols-2 justify-items-center gap-14 z-4">
                                {Object.values(usersProjects).map((project, index) => (
                                    <ProjectCard project={project} user_type={userType} key={index}></ProjectCard>
                                ))}
                            </div>
                            :
                            <div className="mb-20 text-center p-8">
                                {userType !== "Investor" ?
                                    <CustomButton href="/upload-project" text="Submit Your First Project!" style="w-[fit-content] p-4"/>
                                    :
                                    <CallToAction
                                        disabled={true}
                                        text="Invest In Your First Project!"
                                        link="/"
                                        classes='w-full'
                                    />
                                }
                            </div>

                        }
                    </div>
                </div>
            </main>
        </>
    );
}
