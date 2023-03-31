import { useState } from 'react';
import axios from 'axios';
import "./RegisterationForm.module.css"

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
        project: '',
        projectPage: '',
        website: '',
        linkedIn: '',
        gitHub: '',
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
            // Reset form data or perform other actions
          })
          .catch(error => {
            console.error('Form submission error:', error);
            // Handle error or perform other actions
          });
      };

  return (
    <div className='formOuter'>
        <h3>Registration Form</h3>
        <div className="container">
            <div className="formInner">
            <form onSubmit={handleSubmit}>
                <div className='inputfield half'>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={handleInputChange} value={formData.firstName} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={handleInputChange} value={formData.lastName} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" name="dob" onChange={handleInputChange} value={formData.dob} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="nationality">Nationality:</label>
                    <input type="text" name="nationality" onChange={handleInputChange} value={formData.nationality} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="address">Address / Country of Residency:</label>
                    <input type="text" name="address" onChange={handleInputChange} value={formData.address} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" onChange={handleInputChange} value={formData.email} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" name="phone" onChange={handleInputChange} value={formData.phone} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="professionalStatus">Professional Status:</label>
                    <input type="text" name="professionalStatus" onChange={handleInputChange} value={formData.professionalStatus} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" name="jobTitle" onChange={handleInputChange} value={formData.jobTitle} required />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="company">Company:</label>
                    <input type="text" name="company" onChange={handleInputChange} value={formData.company} required />
                </div>

                <div className='inputselect half'>
                    <label htmlFor="tShirtSize">T-shirt Size:</label>
                    <select name="tShirtSize" onChange={handleInputChange} value={formData.tShirtSize} required>
                        <option value="">-- Please Select --</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>

                <div className='inputfield half'>
                    <label htmlFor="videoPresentation">Video presentation: optional  (bigger chances to be selected)</label>
                    <input type="url" name="videoPresentation" onChange={handleInputChange} />
                </div>

                <div className='inputtextarea'>
                    <label htmlFor="projectInfo">Do you have a project? If yes, please supply all relevant information:</label>
                    <textarea name="projectInfo" onChange={handleInputChange} value={formData.projectInfo} />
                </div> 

                <div className='inputfield half'>
                    <label htmlFor="projectPage">Project Page:</label>
                    <input type="url" name="projectPage" onChange={handleInputChange} value={formData.projectPage} />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="website">Website:</label>
                    <input type="url" name="website" onChange={handleInputChange} value={formData.website} />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="linkedIn">LinkedIn:</label>
                    <input type="url" name="linkedIn" onChange={handleInputChange} value={formData.linkedIn} />
                </div>

                <div className='inputfield half'>
                    <label htmlFor="github">GitHub:</label>
                    <input type="url" name="github" onChange={handleInputChange} value={formData.github} />
                </div>

                <div className='inputfield half'>
                <label htmlFor="teamMembers">Team Members (names?/number?):</label>
                <input type="text" name="teamMembers" onChange={handleInputChange} value={formData.teamMembers} />
                </div>

                <div className='inputradio'>
                    <label className='block' htmlFor="availableToTravel">Are you available to travel to Rio de Janeiro during the event dates: ZENCON Rio 16-21 September 2023?</label>
                    <label htmlFor="availableToTravelYes">Yes</label>
                    <input type="radio" name="availableToTravel" id="availableToTravelYes" value="yes" onChange={handleInputChange} checked={formData.availableToTravel === "yes"} />
                    <label htmlFor="availableToTravelNo">No</label>
                    <input type="radio" name="availableToTravel" id="availableToTravelNo" value="no" onChange={handleInputChange} checked={formData.availableToTravel === "no"} />
                </div>

                <div className='inputradio'>
                    <label className='block' htmlFor="haveTeam">Do you have a team?</label>
                    <label htmlFor="haveTeamYes">Yes</label>
                    <input type="radio" name="haveTeam" id="haveTeamYes" value="yes" onChange={handleInputChange} checked={formData.haveTeam === "yes"} />
                    <label htmlFor="haveTeamNo">No</label>
                    <input type="radio" name="haveTeam" id="haveTeamNo" value="no" onChange={handleInputChange} checked={formData.haveTeam === "no"} />
                </div>

                    <div className='inputradio'>
                        <label className='block' htmlFor="teamMembersRegistered">If yes, are your team members registered to attend ZENCON Rio?</label>
                        <label htmlFor="teamMembersRegisteredYes">Yes</label>
                        <input type="radio" name="teamMembersRegistered" id="teamMembersRegisteredYes" value="yes" onChange={handleInputChange} checked={formData.teamMembersRegistered === "yes"} />
                        <label htmlFor="teamMembersRegisteredNo">No</label>
                        <input type="radio" name="teamMembersRegistered" id="teamMembersRegisteredNo" value="no" onChange={handleInputChange} checked={formData.teamMembersRegistered === "no"} />
                        <div className='inputradio'>
                            <label className='block' htmlFor="shareRoom">If yes, is it an option to share a room (twin)?</label>
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

                    <div className='inputradio'>
                        <label  className='block' htmlFor="attendingBlockchainRio">Are you attending Blockchain Rio 2023?</label>
                        <input type="radio" id="yes" name="attendingBlockchainRio" value="yes" onChange={handleInputChange} checked={formData.attendingBlockchainRio === 'yes'}/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="attendingBlockchainRio" value="no" onChange={handleInputChange} checked={formData.attendingBlockchainRio === 'no'}/>
                        <label htmlFor="no">No</label>
                    </div>

                    <button className='inputButton half' type='submit'>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )

}

export default RegistrationForm