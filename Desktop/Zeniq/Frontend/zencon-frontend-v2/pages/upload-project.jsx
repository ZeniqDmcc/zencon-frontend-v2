import React, { useEffect, useState } from "react";
import CallToAction from "../components/Buttons/CallToAction";
import Container from "../components/Container/Container";
import FileUploadFileds from "../components/FileUploadFields/FileUploadFileds";
import MultiInput from "../components/MultiInput/MultiInput";
import Navbar from "../components/Navbar/Navbar";
import ProjectInfoFields from "../components/ProjectInfoFields/ProjectInfoFields";
import { useUploadProjectContext } from "../context/UploadProjectContextProvider";
import fileToBinaryUpload from "../utils/Helpers/fileToBinaryUpload";
import Heading from "../components/Atoms/Headings/Heading";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";
import ProjectCallButton from "../components/Buttons/ProjectCallButton";

export default function UploadProjects() {

    const { setProjectFiles, setDevsInProject } = useUploadProjectContext();
    const [isAllFilledOut, setIsAllFilledOut] = useState(false);

    useEffect(() => {
        // clear whatever is in devsInProject context variable
        setDevsInProject([{ dev_wallet_address: '', rights_in_project: 'Participant' }]);
    }, []);


    /* FORM THINGS */
    const [projectTitle, setProjectTitle] = useState('')
    const handleUserInputChangeTitle = (e) => {
        setProjectTitle(e.target.value);
    }
    const [shortDescription, setShortDescription] = useState('')
    const handleUserInputChangeShortDescription = (e) => {
        setShortDescription(e.target.value);
    }
    const [detailedDescription, setDetailedDescription] = useState('')
    const handleUserInputChangeDetailedDescription = (e) => {
        setDetailedDescription(e.target.value);
    }
    const [category, setCategory] = useState('Web3 Infrastructure')
    const handleUserInputChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const [targetIndustry, setTargetIndustry] = useState('')
    const handleUserInputChangeTargetIndustry = (e) => {
        setTargetIndustry(e.target.value);
    }
    const [landingPage, setLandingPage] = useState('')
    const handleUserInputChangeLandingPage = (e) => {
        setLandingPage(e.target.value);
    }
    const [projectRole, setProjectRole] = useState('Manager')
    const handleUserInputChangeRole = (e) => {
        setProjectRole(e.target.value);
    }
    const [video, setVideo] = useState('')
    const handleUserInputChangeVideo = (e) => {
        setVideo(e.target.value);
    }
    useEffect(() => {
        if (projectTitle && shortDescription && detailedDescription && category && targetIndustry && landingPage && projectRole && video) {
            setIsAllFilledOut(true);
        } else {
            setIsAllFilledOut(false);
        }
    }, [projectTitle, shortDescription, detailedDescription, category, targetIndustry, landingPage, projectRole, video]);
    /* FORM THINGS */


    /* FILE THINGS */
    const handleUserInputChangeLogoImage = (e) => {
        if (fileToBinaryUpload(e?.target?.files[0], "logo_image", setProjectFiles)) {
            // console.log("too asd  much");
        }
    }
    const handleUserInputChangeAppImage = (e) => {
        if (fileToBinaryUpload(e?.target?.files[0], "app_image", setProjectFiles)) {
            // console.log("too asd  much");
        }
    }
    const handleUserInputChangePresSlides = (e) => {
        if (fileToBinaryUpload(e?.target?.files[0], "pres_slides", setProjectFiles)) {
            // console.log("too asd  much");
        }
    }
    let fileUploadProps = {
        handleUserInputChangeLogoImage,
        handleUserInputChangeAppImage,
        handleUserInputChangePresSlides
    }
    /* FILE THINGS */

    /* data that goes to confirmation page */
    let projectInfo = {
        title: projectTitle,
        short_description: shortDescription,
        detailed_description: detailedDescription,
        category: category,
        target_industry: targetIndustry,
        landing_page: landingPage,
        users_role_in_project: projectRole,
        video_link: video
    }

    /* FORM props */
    let projectInfoProps = {
        ...projectInfo,
        handleUserInputChangeTitle,
        handleUserInputChangeShortDescription,
        handleUserInputChangeDetailedDescription,
        handleUserInputChangeCategory,
        handleUserInputChangeTargetIndustry,
        handleUserInputChangeLandingPage,
        handleUserInputChangeRole,
        handleUserInputChangeVideo
    }


    return (
        <>
            <Navbar />
            <main className="relative min-h-screen overflow-hidden page-wrapper pb-[100px] 480px:pb-[60px]">
                <div>
                    <Container>
                        <div className="text-center pb-4 w-max-[50vw]">
                            <div className="flex flex-row justify-between">
                                <div className="pt-[200px] mx-auto 1024px:pt-[150px] flex flex-col lg:gap-14 gap-10 pb-24 1024px:pb-[45px] 1024px:px-[30px]">
                                    <div className="flex flex-col items-center justify-center lg:gap-8 gap-4 max-w-[900px] mx-auto text-center">
                                        <Heading level="1">WANNA PUSH YOUR WEB3 PROJECT TO THE NEXT LEVEL?
                                            <br />
                                            <span className="text-[#fff] font-extrabold font-Hanson">You&apos;re At The Right Place!</span>
                                        </Heading>
                                        <div className="px-3">
                                            <Paragraph text="Filling up your project details below is the first step to get your process listed on the ZENCON's Launchpad and your chance to get invited to the NEXT ZENCON EDITION!" />
                                        </div>
                                    </div>
                                    <div className="flex 480px:flex-col justify-around border border-[#87FF4F] lg:w-[100%] lg:max-w-[1100px] w-full 480px:py-8 480px:w-[180px] 480px:gap-8 mx-auto lg:p-10 sm:p-5 p-4">
                                        <div className="text-center 480px:flex 480px:flex-col 480px:gap-2">
                                            <Paragraph text="Community" />
                                            <Heading level="2">750+</Heading>
                                            <Paragraph text="Web3 Developers" />
                                        </div>
                                        <div className=" 480px:flex 480px:flex-col 480px:gap-2 text-center border-l border-r 480px:border-0 480px:border-t 480px:border-b 480px:py-10 480px:px-0 border-[#324463] lg:px-[90px] sm:px-[40px] px-[30px] ">
                                            <Paragraph text="Coming from" />
                                            <Heading level="2">53</Heading>
                                            <Paragraph text="Different Countries" />
                                        </div>
                                        <div className="text-center 480px:flex 480px:flex-col 480px:gap-2">
                                            <Paragraph text="More than" />
                                            <Heading level="2">08</Heading>
                                            <Paragraph text="Smart Contracts deployed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='w-full'>
                    <div className="container mx-auto">
                        <div className="text-center flex flex-col gap-5">
                            <Heading level="2">Project Information</Heading>
                            <Paragraph text="Please fill up the form carefully  before submitting." />
                        </div>
                        <div className="w-full max-w-[728px] mx-auto">
                            <form className="px-8 pt-6 pb-8 rounded shadow-md">
                                <ProjectInfoFields {...projectInfoProps} />
                                <hr className="mt-6 480px:mt-4 border-[#324463]" />
                                <p className="mt-12 text-2xl text-center">Who else is in the project?</p>

                                {/* Multi Input Field */}

                                <MultiInput />

                                {/* File Upload */}

                                <FileUploadFileds {...fileUploadProps} />

                                {/* Save and Continue Button */}

                                <div className="flex items-center justify-center pt-10 480px:pt-5">
                                    <ProjectCallButton 
                                        disabled={!isAllFilledOut}
                                        text="Save and Continue"
                                        link="/confirmation-page"
                                        query={{
                                            apiEndpoint: 0,
                                            projectInfo: new URLSearchParams(projectInfo).toString()
                                        }}
                                    />
                                </div>
                                {/* <div>
                                    <p className={`${isAllFilledOut && ""} text-red-500 mt-6 text-2xl text-center underline`}>
                                        Some data is still missing! You cannot submit your project with missing information.</p>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}