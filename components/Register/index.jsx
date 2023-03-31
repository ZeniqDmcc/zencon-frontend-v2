import { useState } from 'react';
import axios from 'axios';
import styles from "./register.module.css"
import Navbar from "../Navbar/Navbar"

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        nationality: '',
        address: '',
        email: '',
        phone: '',
        professionalStatus: '',
        jobTitle: '',
        company: '',
        tShirtSize: '',
        videoPresentation: '',
        projectInfo: '',
        projectPage: '',
        website: '',
        linkedIn: '',
        github: '',
        teamMembers: '',
        travelRio: '',
        haveTeam: '',
        teamMembersRegistered: '',
        shareRoom: '',
        attendingBlockchainRio: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories', formData)
            .then(response => {
                console.log('Form submission successful:', response);
            })
            .catch(error => {
                console.error('Form submission error:', error);
            });
    };

    return (
        <div className={styles.formOuter}>
            <Navbar />
            <div className="pt-10">
                <h3>Registration Form</h3>
                <div className="container mx-auto">
                    <div className="shadow-md py-50 p-8">
                        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
                            <div className={styles.half}>
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" name="firstName" onChange={handleInputChange} value={formData.firstName} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" name="lastName" onChange={handleInputChange} value={formData.lastName} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="dob">Date of Birth:</label>
                                <input type="date" name="dob" onChange={handleInputChange} value={formData.dob} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="nationality">Nationality:</label>
                                <input type="text" name="nationality" onChange={handleInputChange} value={formData.nationality} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="address">Address / Country of Residency:</label>
                                <input type="text" name="address" onChange={handleInputChange} value={formData.address} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" name="email" onChange={handleInputChange} value={formData.email} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" name="phone" onChange={handleInputChange} value={formData.phone} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="professionalStatus">Professional Status:</label>
                                <input type="text" name="professionalStatus" onChange={handleInputChange} value={formData.professionalStatus} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="jobTitle">Job Title:</label>
                                <input type="text" name="jobTitle" onChange={handleInputChange} value={formData.jobTitle} required />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="company">Company:</label>
                                <input type="text" name="company" onChange={handleInputChange} value={formData.company} required />
                            </div>

                            <div className={styles.inputselect}>
                                <label htmlFor="tShirtSize">T-shirt Size:</label>
                                <select className={styles.select} name="tShirtSize" onChange={handleInputChange} value={formData.tShirtSize} required>
                                    <option value="">-- Please Select --</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="videoPresentation">Video presentation: optional  (bigger chances to be selected)</label>
                                <input type="url" name="videoPresentation" onChange={handleInputChange} />
                            </div>

                            <div className={styles.inputtextarea}>
                                <label htmlFor="projectInfo">Do you have a project? If yes, please supply all relevant information:</label>
                                <textarea name="projectInfo" onChange={handleInputChange} value={formData.projectInfo} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="projectPage">Project Page:</label>
                                <input type="url" name="projectPage" onChange={handleInputChange} value={formData.projectPage} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="website">Website:</label>
                                <input type="url" name="website" onChange={handleInputChange} value={formData.website} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="linkedIn">LinkedIn:</label>
                                <input type="url" name="linkedIn" onChange={handleInputChange} value={formData.linkedIn} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="github">GitHub:</label>
                                <input type="url" name="github" onChange={handleInputChange} value={formData.github} />
                            </div>

                            <div className={styles.half}>
                                <label htmlFor="teamMembers">Team Members (names?/number?):</label>
                                <input type="text" name="teamMembers" onChange={handleInputChange} value={formData.teamMembers} />
                            </div>

                            <div className={styles.inputradio}>
                                <label className={styles.block} htmlFor="availableToTravel">Are you available to travel to Rio de Janeiro during the event dates: ZENCON Rio 16-21 September 2023?</label>
                                <label htmlFor="availableToTravelYes">Yes</label>
                                <input type="radio" name="availableToTravel" id="availableToTravelYes" value="yes" onChange={handleInputChange} checked={formData.availableToTravel === "yes"} />
                                <label htmlFor="availableToTravelNo">No</label>
                                <input type="radio" name="availableToTravel" id="availableToTravelNo" value="no" onChange={handleInputChange} checked={formData.availableToTravel === "no"} />
                            </div>

                            <div className={styles.inputradio}>
                                <label className={styles.block} htmlFor="haveTeam">Do you have a team?</label>
                                <label htmlFor="haveTeamYes">Yes</label>
                                <input type="radio" name="haveTeam" id="haveTeamYes" value="yes" onChange={handleInputChange} checked={formData.haveTeam === "yes"} />
                                <label htmlFor="haveTeamNo">No</label>
                                <input type="radio" name="haveTeam" id="haveTeamNo" value="no" onChange={handleInputChange} checked={formData.haveTeam === "no"} />
                            </div>

                            <div className={styles.inputradio}>
                                <label className="block text-base pb-2" htmlFor="teamMembersRegistered">If yes, are your team members registered to attend ZENCON Rio?</label>
                                <label htmlFor="teamMembersRegisteredYes">Yes</label>
                                <input type="radio" name="teamMembersRegistered" id="teamMembersRegisteredYes" value="yes" onChange={handleInputChange} checked={formData.teamMembersRegistered === "yes"} />
                                <label htmlFor="teamMembersRegisteredNo">No</label>
                                <input type="radio" name="teamMembersRegistered" id="teamMembersRegisteredNo" value="no" onChange={handleInputChange} checked={formData.teamMembersRegistered === "no"} />
                                <div className={styles.inputradio}>
                                    <label className="block text-base pb-2" htmlFor="shareRoom">If yes, is it an option to share a room (twin)?</label>
                                    <label htmlFor="shareRoomYes">
                                        <input type="radio" id="shareRoomYes" name="shareRoom" value="yes" onChange={handleInputChange} checked={formData.shareRoom === "yes"} />
                                        Yes
                                    </label>
                                    <label htmlFor="shareRoomNo">
                                        <input type="radio" id="shareRoomNo" name="shareRoom" value="no" onChange={handleInputChange} checked={formData.shareRoom === "no"} />
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className={styles.inputradio}>
                                <label className="block text-base pb-2" htmlFor="attendingBlockchainRio">Are you attending Blockchain Rio 2023?</label>
                                <input type="radio" id="yes" name={styles.attendingBlockchainRio} value="yes" onChange={handleInputChange} checked={formData.attendingBlockchainRio === 'yes'} />
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" id="no" name={styles.attendingBlockchainRio} value="no" onChange={handleInputChange} checked={formData.attendingBlockchainRio === 'no'} />
                                <label htmlFor="no">No</label>
                            </div>
                            <button className={styles.inputButton} type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RegistrationForm