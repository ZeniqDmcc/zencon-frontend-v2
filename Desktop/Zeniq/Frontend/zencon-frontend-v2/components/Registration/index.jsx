import { nanoid } from "nanoid";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fireworks from "../../assets/fireworks.gif";
import { zencon_event_api_url } from '../../utils/Constants/BackendURLs.js';
import codes from '../../utils/Constants/countriesCodes';
import eighteenYearsOld from "../../utils/Helpers/eighteenYearsOld.js";
import UI_PATHS from "./../../utils/Constants/uiPaths.js";
import styles from "./register.module.css";
const { day, year, month } = eighteenYearsOld()
const lessThanDate = `${year}-${month}-${day}`;

function RegistrationForm({ ethAddr }) {

    const router = useRouter()
    const [success, setSuccess] = useState(null);
    const [hint, setHint] = useState({travel_availability:null,team_registration:null});
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        nationality: '',
        country_of_residancy: '',
        email: '',
        phone: '',
        country_code: '',
        professional_status: '',
        job_title: '',
        company: '',
        tshirt_size: '',
        video_presentation: '',
        project_info: '',
        project_page: '',
        website: '',
        linkedin: '',
        github: '',
        teamMembers: '',
        travel_availability: '',
        has_a_team: '',
        team_registration: '',
        twin_room_option: '',
        event_attendancy: '',
        terms_and_conditions: ''
    });
    useEffect(()=>{
        if(formData.travel_availability==='no'){
            setHint((prevState)=>{
            return {...prevState,travel_availability:'*Please note that ZENCON is not a hybrid event and, if you are selected, attendance in person is mandatory.'}
        })
        }
        if(formData.travel_availability==='yes'){
            setHint((prevState)=>{
                return {...prevState,travel_availability:'*Please make   sure you have all required travel documents'}
            })
        }

        if(formData.has_a_team==='yes'){
            setHint((prevState)=>{
            return {...prevState,team_registration:'*Please make sure that your team registered!'}
        })
        }else{
            setHint((prevState)=>{
                return {...prevState,team_registration:null}
            }) 
        }
    },[formData,success])
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.scrollTo(0, 0);
        fetch(`${zencon_event_api_url}/${UI_PATHS.REGISTER}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "token": ethAddr
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => {
            if (data.status === true) {
                setSuccess(true);
                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            } else {
                setError(data.errors[0])
            }

        }).catch((err) => {
            console.log(err);
            router.push("/")
        })
    };

    return (
        <div className='bg-[#010020] text-white lg:pt-[210px] pt-[153px] lg:pb-[130px] pb-[75px]'>
            <div className="container mx-auto">
                <div className="flex justify-center text-center">
                    <h1 className="font-HeronSans text-[#fff] text-2xl font-[300] leading-[35px] max-w-[950px] 1024px:text-xl 767px:text-2xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6">Enter your information here to register in (ZENCON Rio de Janeiro-2023)</h1>
                </div>
                {success ? <div className='px-16 text-2xl text-center text-green-700 font-HeronSans lg:text-3xl sm:mt-10 sm:mb-8 lg:px-20 sm:px-10' style={{ backgroundImage: `url(${fireworks})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    Thanks! {formData.first_name} {formData.last_name} 	&#128079; you have registered successfully!</div> : null}
                <div className={`${styles.form__container} mx-auto`}>
                    <div className="pt-0 shadow-md py-50">
                        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="first_name">First Name *</label>
                                <input type="text" name="first_name" placeholder='Enter your first name' onChange={handleInputChange} value={formData.first_name} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="last_name">Last Name *</label>
                                <input type="text" name="last_name" placeholder='Enter your last name' onChange={handleInputChange} value={formData.last_name} required />
                            </div>
                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="email">Email Address *</label>
                                <input type="email" name="email" placeholder='Enter your email' onChange={handleInputChange} value={formData.email} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="date_of_birth">Date of Birth *</label>
                                <input type="date" name="date_of_birth" onChange={handleInputChange} value={formData.date_of_birth} max={lessThanDate} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="professional_status">Professional Status *</label>
                                <input type="text" name="professional_status" placeholder='Enter your professional status' onChange={handleInputChange} value={formData.professional_status} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="job_title">Job Title *</label>
                                <input type="text" name="job_title" placeholder='Enter your job title' onChange={handleInputChange} value={formData.job_title} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="company">Company *</label>
                                <input type="text" name="company" placeholder='Enter the company name' onChange={handleInputChange} value={formData.company} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="nationality">Nationality *</label>
                                <select className={`${styles.select} text-black`} name="nationality" placeholder='Enter your nationality' onChange={handleInputChange} value={formData.nationality} required>
                                    <option value="">-- Please Select --</option>

                                    {
                                        codes.map(({ name, emoji }) => {
                                            return <option value={name} key={nanoid()}> {emoji}&nbsp;{name} </option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="country_of_residancy">Address / Country of Residency *</label>
                                <select className={`${styles.select} font-HeronSans text-black`} name="country_of_residancy" onChange={handleInputChange} value={formData.country_of_residancy} required>
                                    <option value="">-- Please Select --</option>
                                    {
                                        codes.map(({ name, emoji }) => {
                                            return <option value={name} key={nanoid()}> {emoji}&nbsp;{name} </option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="phone">Phone Number *</label>
                                <div className='flex flex-row'>
                                    <select name="country_code" className={`${styles.select} ${styles.phnumber}  text-black`} onChange={handleInputChange} value={formData.country_code} required>
                                        <option value="">-- Select --</option>
                                        {
                                            codes.map(({ dial_code, name, emoji }) => {
                                                return <option value={dial_code} key={nanoid()}> {emoji}&nbsp;({dial_code}) </option>
                                            })
                                        }
                                    </select>
                                    <input type="tel" name="phone" onChange={handleInputChange} value={formData.phone} maxLength="10" minLength="8" required />
                                </div>
                            </div>


                            <div className={styles.inputselect}>
                                <label className={styles.label} htmlFor="tshirt_size">T-shirt Size *</label>
                                <select className={`${styles.select} text-black`} name="tshirt_size" onChange={handleInputChange} value={formData.tshirt_size} required>
                                    <option value="">-- Please Select --</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>



                            <div className={styles.inputtextarea}>
                                <label className={styles.label} htmlFor="project_info">Do you have a project? If yes, please supply all relevant information *</label>
                                <div className={styles.inputTextAreaInner}>
                                    <textarea name="project_info" placeholder='Enter the project details' onChange={handleInputChange} value={formData.projectInfo} />
                                </div>
                            </div>
                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="video_presentation">Video presentation: optional  (bigger chances to be selected)</label>
                                <input type="url" name="video_presentation" placeholder='Enter a video url' onChange={handleInputChange} />
                            </div>
                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="project_page">Project Page</label>
                                <input type="url" name="project_page" placeholder='Enter the project page' onChange={handleInputChange} value={formData.project_page} />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="website">Website</label>
                                <input type="url" name="website" placeholder='Enter the website' onChange={handleInputChange} value={formData.website} />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="linkedin">LinkedIn *</label>
                                <input type="url" name="linkedin" placeholder='Enter your linkedin profile' onChange={handleInputChange} value={formData.linkedin} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="github">GitHub *</label>
                                <input type="url" name="github" placeholder='Enter your github profile' onChange={handleInputChange} value={formData.github} required />
                            </div>

                            <div className={styles.half}>
                                <label className={styles.label} htmlFor="teamMembers">Team Members (names?/number?)</label>
                                <input type="text" name="teamMembers" placeholder='Enter your team members if you have a team' onChange={handleInputChange} value={formData.teamMembers} />
                            </div>

                            <div className={`${styles.inputradio} mt-5`}>
                                <label className={`${styles.block} ${styles.rlabel} ${styles.label}`} htmlFor="travel_availability">Are you available to travel to Rio de Janeiro during the event dates: ZENCON Rio de Janeiro 16-21 September 2023? *</label>
                                <div className="flex items-center mt-3">
                                    <label htmlFor="travel_availabilityYes">Yes</label>
                                    <input className={styles.radio} type="radio" name="travel_availability" id="travel_availabilityYes" value="yes" onChange={handleInputChange} checked={formData.travel_availability === "yes"} />
                                    <label className={styles.mrleft} htmlFor="travel_availabilityNo">No</label>
                                    <input className={styles.radio} type="radio" name="travel_availability" id="travel_availabilityNo" value="no" onChange={handleInputChange} checked={formData.travel_availability === "no"} />
                                </div>
                            </div>
                            {hint.travel_availability ? <div className="block mt-4 w12/12">
                                <p className='p-2 text-yellow-500'>⚠️ {hint.travel_availability}</p>
                            </div> : null}
                            <div className={styles.inputradio}>
                                <label className={`${styles.block} ${styles.rlabel} ${styles.label}`} htmlFor="has_a_team">Do you have a team? *</label>
                                <div className="flex items-center mt-3">
                                    <label htmlFor="has_a_teamYes">Yes</label>
                                    <input className={styles.radio} type="radio" name="has_a_team" id="has_a_teamYes" value="yes" onChange={handleInputChange} checked={formData.has_a_team === "yes"} />
                                    <label className={styles.mrleft} htmlFor="has_a_teamNo">No</label>
                                    <input className={styles.radio} type="radio" name="has_a_team" id="has_a_teamNo" value="no" onChange={handleInputChange} checked={formData.has_a_team === "no"} />
                                </div>
                            </div>
                            {hint.team_registration ? <div className="block mt-4 w12/12">
                                <p className='${styles.label} p-2 text-yellow-500'>⚠️ {hint.team_registration}</p>
                            </div> : null}
                            <div className={styles.inputradio}>
                                <label className={`${styles.rlabel} ${styles.label} block text-base pb-2`} htmlFor="team_registration">If yes, are your team members registered to attend ZENCON Rio de Janeiro? *</label>
                                <div className="flex items-center mt-3">
                                <label className={styles.label} htmlFor="team_registrationYes">Yes</label>
                                <input className={styles.radio} type="radio" name="team_registration" id="team_registrationYes" value="yes" onChange={handleInputChange} checked={formData.team_registration === "yes"} />
                                <label className={`${styles.label} ${styles.mrleft}`} htmlFor="team_registrationNo">No</label>
                                <input className={styles.radio} type="radio" name="team_registration" id="team_registrationNo" value="no" onChange={handleInputChange} checked={formData.team_registration === "no"} />
                                </div>
                                <div className={styles.inputradio}>
                                    <label className={`${styles.rlabel} ${styles.label} block text-base pb-2`} htmlFor="twin_room_option">If yes, is it an option to share a room (twin)? *</label>
                                    <div className="flex items-center mt-3">
                                        <label className={styles.label} htmlFor="twin_room_optionYes">Yes</label>
                                        <input className={styles.radio} type="radio" id="twin_room_optionYes" name="twin_room_option" value="yes" onChange={handleInputChange} checked={formData.twin_room_option === "yes"} />
                                        <label className={`${styles.mrleft} ${styles.label}`} htmlFor="twin_room_optionNo">No</label>
                                        <input className={styles.radio} type="radio" id="twin_room_optionNo" name="twin_room_option" value="no" onChange={handleInputChange} checked={formData.twin_room_option === "no"} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.inputradio}>
                                <label className={`${styles.rlabel} ${styles.label} block text-base pb-2`} htmlFor="event_attendancy">Are you attending Blockchain Rio de Janeiro 2023? *</label>
                                <div className="flex items-center mt-3">
                                    <label className={`${styles.label} ${styles.label}`} htmlFor="event_attendancyYes">Yes</label>
                                    <input type="radio" id="yes" className={`${styles.event_attendancy} ${styles.radio}`} name="event_attendancy" value="yes" onChange={handleInputChange} checked={formData.event_attendancy === 'yes'} />
                                    <label className={`${styles.mrleft} ${styles.label}`} htmlFor="event_attendancyNo">No</label>
                                    <input type="radio" id="no" className={`${styles.event_attendancy} ${styles.radio}`} name="event_attendancy" value="no" onChange={handleInputChange} checked={formData.event_attendancy === 'no'} />
                                </div>
                            </div>

                            <div className="block w-full mt-5">
                                <input type="checkbox" className = {`mr-3 ${styles.checkbox}`} id="terms_and_conditions" name="terms_and_conditions" onClick={(event) => {
                                    if (event.target.checked === true) {
                                        setFormData({ ...formData, terms_and_conditions: "yes" })
                                    } else {
                                        setFormData({ ...formData, terms_and_conditions: "" })
                                    }
                                }} />
                                <label htmlFor="terms_and_conditions" className={`${styles.label} ml-2`}>I agree with * <a href="/terms" target="_blank"><span className='cursor-pointer underline text-[#A1E285]'>Terms and Conditions</span></a></label>
                            </div>

                            {error ? <div className="block w-5/12 px-3 mt-4 border-2 border-red-500 rounded w-">
                                <p className='p-2 text-red-600 font-HeronSans'>⚠️ {error}</p>
                            </div> : null}

                            <div className="flex w-full mt-3">
                                <button className="font-Hanson mt-7 uppercase font-normal text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]" type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm