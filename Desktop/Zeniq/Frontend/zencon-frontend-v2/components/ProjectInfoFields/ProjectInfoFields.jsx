import React from "react";

export default function ProjectInfoFields(props) {

    const inputStyle = "appearance-none block w-full text-[#A1A1A1] border-2 border-[#324463] py-3 px-4 mb-3 leading-tight focus:border-gray-400 focus:outline-none bg-[#010222]"
    const selectFieldStyle = "w-full md:w-1/2 px-3 mb-6 md:mb-0"

    return (

        <>
            <div className="flex flex-wrap -mx-3 mb-6 480px:mb-0">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-title">
                        Title
                    </label> 
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.title}
                        </p>
                        :
                        <div>
                            <input
                                className={inputStyle}
                                id="grid-first-name" type="text" placeholder="Project title"
                                value={props.title} onChange={props.handleUserInputChangeTitle}/>
                             
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 480px:mb-0">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-short-description">
                        Short Description
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.short_description}
                        </p>
                        :
                        <div>
                            <textarea
                                maxLength="500" size="500"
                                className={inputStyle}
                                id="grid-password" type="password"
                                placeholder="Short description of your solution"
                                value={props.short_description} onChange={props.handleUserInputChangeShortDescription}/>
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-10">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-short-description">
                        Detailed Description
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.detailed_description}
                        </p>
                        :
                        <div>
                            <textarea
                                maxLength="10000" size="10000"
                                rows="10"
                                className={inputStyle}
                                id="grid-password" type="password"
                                placeholder="Detailed description of your solution"
                                value={props.detailed_description}
                                onChange={props.handleUserInputChangeDetailedDescription}/>
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-10 480px:mb-0">

                <div className={selectFieldStyle}>
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-state">
                        Category
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.category}
                        </p>
                        :
                        <div className="relative">
                            <select
                                className={inputStyle}
                                id="grid-state"
                                value={props.category} onChange={props.handleUserInputChangeCategory}>
                                <option>Web3 Infrastructure</option>
                                <option>Tokenization</option>
                                <option>DeFi</option>
                                <option>B2B/B2C</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                             
                        </div>
                    }
                </div>

                <div className={selectFieldStyle}>
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-industry">
                        Target Industry
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.target_industry}
                        </p>
                        :
                        <div>
                            <input
                                className={inputStyle}
                                id="grid-industry" type="text" placeholder="Industry"
                                value={props.target_industry} onChange={props.handleUserInputChangeTargetIndustry}/>
                        </div>
                    }
                </div>

                <div className={selectFieldStyle}>
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-landing-page">
                        Landing Page
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.landing_page}
                        </p>
                        :
                        <div>
                            <input
                                className={inputStyle}
                                id="grid-landing-page" type="text"
                                placeholder="Link to your project's landing page"
                                value={props.landing_page} onChange={props.handleUserInputChangeLandingPage}/>
                        </div>
                    }
                </div>

                <div className={selectFieldStyle}>
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-state">
                        Your role in the project
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.users_role_in_project}
                        </p>
                        :
                        <div className="relative">
                            <select
                                className={inputStyle}
                                id="grid-state"
                                value={props.users_role_in_project} onChange={props.handleUserInputChangeRole}>
                                <option>Manager</option>
                                <option>Designer</option>
                                <option>Frontend Developer</option>
                                <option>Backend Developer</option>
                                <option>Full Stack Developer</option>
                                <option>Industry Expert</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                             
                        </div>
                    }
                </div>

                <div className={selectFieldStyle}>
                    <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-city">
                        Pitch Video
                    </label>
                    {props.readOnly ?
                        <p
                            className="sm:text-[20px] text-[18px] w-full mt-6 text-white font-secondary text-left mb-10">
                            {props.video_link}
                        </p>
                        :
                        <div>
                            <input
                                className={inputStyle}
                                id="grid-video" type="text" placeholder="Link to your pitch video"
                                value={props.video_link} onChange={props.handleUserInputChangeVideo}/>
                             
                        </div>
                    }
                </div>
            </div>
        </>
    )
}