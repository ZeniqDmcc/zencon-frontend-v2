import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CallToAction from "../components/Buttons/CallToAction";
import { LoadingStyled } from "../components/LoadingStyled/LoadingStyled";
import { useUserDataContext } from "../context/UserDataContextProvider";
import HeroBg from "../public/assets/projects_hero_bg.png";

export default function ProjectDetails() {

    const {usersProjects, ethAddr, userType} = useUserDataContext();
    const router = useRouter();
    const {id} = router.query;

    const [project, setProject] = useState(null);

    let fakeApprovedStatus = Math.random() < 0.5;

    const [logoImageSrc, setLogoImageSrc] = useState("");
    const [appImgSrc, setAppImgSrc] = useState("");
    const [presSlidesSrc, setPresSlidesSrc] = useState("");


    useEffect(() => {
    
        if (!usersProjects) {
            router.push("/my-projects");
            return;
        }

        setProject(usersProjects[id]);

        if (project?.files && Object.keys(project.files).length > 0) {

            const logo_image = project?.files?.logo_image;
            const app_image = project?.files?.app_image;
            const pres_slides = project?.files?.pres_slides;

            // if there is an app_image, create a Base64-encoded ASCII string from the file_binary string
            // maybe use the recommended function instead of btoa
            if (logo_image) {
                setLogoImageSrc('data:image/png;base64,' + btoa(app_image.file_binary));
            }

            if (app_image) {
                if (app_image.mime_type === "video/mp4") {
                    setAppImgSrc('data:video/mp4;base64,' + btoa(app_image.file_binary));
                } else {
                    setAppImgSrc('data:image/png;base64,' + btoa(app_image.file_binary));
                }
            }

            if (pres_slides) {
                setPresSlidesSrc('data:image/png;base64,' + btoa(app_image.file_binary));
            }
        }

        return () => {
            setLogoImageSrc("");
            setAppImgSrc("");
            setPresSlidesSrc("");
        }

    }, [project]);


    if (!project) {
        return (
            <LoadingStyled redirectTo={"my-projects"} timeToWait={5000} varToWaitFor={[project]}/>
        );
    }

    return (
        <>
            <main className="relative overflow-hidden page-wrapper">
                {/*<div className="bg-gray-600">*/}
                <div className="min-h-full bg-fixed bg-center bg-no-repeat bg-cover bg-heroBg"
                     style={{backgroundImage: `url(${appImgSrc ? appImgSrc : HeroBg})`}}>
                    {appImgSrc.includes("video") &&
                        <video className="object-cover fixed z-[-1]" src={appImgSrc}
                               autoPlay loop muted>
                        </video>
                    }
                    <div className="container w-full h-full mx-auto mt-40 sm:px-0">
                        <div className="text-center p-8 w-max-[50vw] bg-[#1B1934FF]/50 rounded-t-3xl h-full">
                            <div className="flex flex-row justify-center">
                                <div>
                                    <h1 className="capitalize font-extrabold font-primary text-[#E9963CFF] text-center text-6xl">
                                        {project.title}
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] text-center w-full mt-6 text-gray-300 font-secondary mb-10">
                                        {project.short_description}
                                      
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Category
                                    </p>
                                    <h1 className="text-2xl font-extrabold text-center text-white font-primary ">
                                        {project.category}
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Landing Page
                                    </p>
                                    <h1 className="text-2xl font-extrabold text-center text-white font-primary">
                                        <Link
                                            href={project.landing_page}><span
                                            style={{
                                                color: "#ff9042",
                                                cursor: "pointer"
                                            }}>{project.landing_page}</span></Link>
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Number of Devs
                                    </p>
                                    <h1 className="text-2xl font-extrabold text-center text-white font-primary ">
                                        {project.devs_in_project.length}
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Target Industry
                                    </p>
                                    <h1 className="text-2xl font-extrabold text-center text-white font-primary ">
                                        {project.target_industry}
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Status
                                    </p>
                                    <h1 className="text-2xl font-extrabold text-center text-white font-primary ">
                                        <span style={{
                                            color: project.is_confirmed ? "green" : "red"
                                        }}>{project.is_confirmed ? "Approved" : "Not Approved"}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <div className="container mx-auto bg-white">
                        <div className="flex justify-between mt-8 mb-8">
                            <div>
                                <CallToAction
                                    text="Back to Projects"
                                    classes="w-full"
                                    link="/my-projects"
                                />
                            </div>
                            <div>
                                <CallToAction
                                    text="Edit Project"
                                    classes="w-full"
                                    link="/edit-project"
                                    query={{id: project.id}}
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-full">
                            <div className="px-8 pt-6 pb-8 mb-20 bg-white rounded shadow-lg">
                                <h1 className="mt-10 mb-8 text-2xl font-extrabold text-left text-gray-900 font-primary">Description</h1>
                                <p className="sm:text-[20px] text-[18px] w-full text-gray-600 font-secondary ">
                                    {project.detailed_description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>

    )
}