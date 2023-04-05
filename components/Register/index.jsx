import { useState } from 'react';
import styles from "./register.module.css"
import codes from '../../utils/Constants/countriesCodes';
import { useRouter } from 'next/router';

function RegistrationForm({ethAddr}) {
    const router = useRouter()
    console.log("Eth_Address",ethAddr);
    
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
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        formData.phone = `${formData.country_code}${formData.phone}`
        event.preventDefault();
        fetch(`http://192.168.19.100:9003/api/v1/zencon/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "token":ethAddr
            },
            body:JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>{
            router.push("/register")
        }).catch((err)=>{
            console.log(err);
            router.push("/")
        })
    };

    return (
        <> 
        <div className="pt-20 bg-white sm:w-10/12 mx-auto">
                <h3 className='font-extrabold font-primary text-gray-900 text-center text-3xl mt-10 mb-8'>Enter your information here to register in (RIO-2023)</h3>
                <div className="container mx-auto">
                    <div className="shadow-md py-50 p-8">
                        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
                            <div className={styles.half}>
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" name="first_name" onChange={handleInputChange} value={formData.first_name} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" name="last_name" onChange={handleInputChange} value={formData.last_name} required />
                            </div>
                            <div className={styles.half}>
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" name="email" onChange={handleInputChange} value={formData.email} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="date_of_birth">Date of Birth:</label>
                                <input type="date" name="date_of_birth" onChange={handleInputChange} value={formData.date_of_birth} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="professional_status">Professional Status:</label>
                                <input type="text" name="professional_status" onChange={handleInputChange} value={formData.professional_status} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="job_title">Job Title:</label>
                                <input type="text" name="job_title" onChange={handleInputChange} value={formData.job_title} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="company">Company:</label>
                                <input type="text" name="company" onChange={handleInputChange} value={formData.company} required />
                            </div>
                            
                            <div className={styles.half}>
                                <label htmlFor="nationality">Nationality:</label>
                                <select className={styles.select} name="nationality" onChange={handleInputChange} value={formData.nationality} required>
                                    <option value="">-- Please Select --</option>

                                    {
                                        codes.map(({name,emoji})=>{
                                            return <option value={name}> {emoji}&nbsp;{name} </option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="country_of_residancy">Address / Country of Residency:</label>
                                <select className={styles.select} name="country_of_residancy" onChange={handleInputChange} value={formData.country_of_residancy} required>
                                    <option value="">-- Please Select --</option>
                                    {
                                        codes.map(({name,emoji})=>{
                                            return <option value={name}> {emoji}&nbsp;{name} </option>
                                        })
                                    }
                                </select>
                            </div>

                           

                            <div className={styles.half}>
                                <label htmlFor="phone">Phone Number:</label>
                                <div className='flex flex-row'>
                                    <select name="country_code" onChange={handleInputChange} value={formData.country_code} required>
                                    <option value="">-- Please Select --</option>
                                    {
                                        codes.map(({dial_code,name,emoji})=>{
                                            return <option value={dial_code}> {emoji}&nbsp;{name}&nbsp;({dial_code}) </option>
                                        })
                                    }
                                    </select>
                                    <input type="tel" name="phone" onChange={handleInputChange} value={formData.phone} maxLength="10" minLength="8" required/>  
                                </div>
                            </div>


                            <div className={styles.inputselect}>
                                <label htmlFor="tshirt_size">T-shirt Size:</label>
                                <select className={styles.select} name="tshirt_size" onChange={handleInputChange} value={formData.tshirt_size} required>
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
                                <label htmlFor="project_info">Do you have a project? If yes, please supply all relevant information:</label>
                                <textarea name="project_info" onChange={handleInputChange} value={formData.projectInfo} />
                            </div>
                            <div className={styles.half}>
                                <label htmlFor="video_presentation">Video presentation: optional  (bigger chances to be selected)</label>
                                <input type="url" name="video_presentation" onChange={handleInputChange} />
                            </div>
                            <div className={styles.half}>
                                <label htmlFor="project_page">Project Page:</label>
                                <input type="url" name="project_page" onChange={handleInputChange} value={formData.project_page} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="website">Website:</label>
                                <input type="url" name="website" onChange={handleInputChange} value={formData.website} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="linkedin">LinkedIn:</label>
                                <input type="url" name="linkedin" onChange={handleInputChange} value={formData.linkedin} required/>
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="github">GitHub:</label>
                                <input type="url" name="github" onChange={handleInputChange} value={formData.github} required/>
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="teamMembers">Team Members (names?/number?):</label>
                                <input type="text" name="teamMembers" onChange={handleInputChange} value={formData.teamMembers} />
                            </div>

                            <div className={styles.inputradio}>
                                <label className={styles.block} htmlFor="travel_availability">Are you available to travel to Rio de Janeiro during the event dates: ZENCON Rio 16-21 September 2023?</label>
                                <label htmlFor="travel_availabilityYes">Yes</label>
                                <input type="radio" name="travel_availability" id="travel_availabilityYes" value="yes" onChange={handleInputChange} checked={formData.travel_availability === "yes"} />
                                <label htmlFor="travel_availabilityNo">No</label>
                                <input type="radio" name="travel_availability" id="travel_availabilityNo" value="no" onChange={handleInputChange} checked={formData.travel_availability === "no"} />
                            </div>

                            <div className={styles.inputradio}>
                                <label className={styles.block} htmlFor="has_a_team">Do you have a team?</label>
                                <label htmlFor="has_a_teamYes">Yes</label>
                                <input type="radio" name="has_a_team" id="has_a_teamYes" value="yes" onChange={handleInputChange} checked={formData.has_a_team === "yes"} />
                                <label htmlFor="has_a_teamNo">No</label>
                                <input type="radio" name="has_a_team" id="has_a_teamNo" value="no" onChange={handleInputChange} checked={formData.has_a_team === "no"} />
                            </div>

                            <div className={styles.inputradio}>
                                <label className="block text-base pb-2" htmlFor="team_registration">If yes, are your team members registered to attend ZENCON Rio?</label>
                                <label htmlFor="team_registrationYes">Yes</label>
                                <input type="radio" name="team_registration" id="team_registrationYes" value="yes" onChange={handleInputChange} checked={formData.team_registration === "yes"} />
                                <label htmlFor="team_registrationNo">No</label>
                                <input type="radio" name="team_registration" id="team_registrationNo" value="no" onChange={handleInputChange} checked={formData.team_registration === "no"} />
                                <div className={styles.inputradio}>
                                    <label className="block text-base pb-2" htmlFor="twin_room_option">If yes, is it an option to share a room (twin)?</label>
                                    <label htmlFor="twin_room_optionYes">
                                        <input type="radio" id="twin_room_optionYes" name="twin_room_option" value="yes" onChange={handleInputChange} checked={formData.twin_room_option === "yes"} />
                                        Yes
                                    </label>
                                    <label htmlFor="twin_room_optionNo">
                                        <input type="radio" id="twin_room_optionNo" name="twin_room_option" value="no" onChange={handleInputChange} checked={formData.twin_room_option === "no"} />
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className={styles.inputradio}>
                                <label className="block text-base pb-2" htmlFor="event_attendancy">Are you attending Blockchain Rio 2023?</label>
                                <input type="radio" id="yes" className={styles.event_attendancy} name="event_attendancy" value="yes" onChange={handleInputChange} checked={formData.event_attendancy === 'yes'} />
                                <label htmlFor="event_attendancyYes">Yes</label>
                                <input type="radio" id="no" className={styles.event_attendancy} name="event_attendancy" value="no" onChange={handleInputChange} checked={formData.event_attendancy === 'no'} />
                                <label htmlFor="event_attendancyNo">No</label>
                            </div>
                            <button className={styles.inputButton} type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )

}

export default RegistrationForm