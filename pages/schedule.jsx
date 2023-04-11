import Navbar from "../components/Navbar/Navbar";

export default function Schedule() {
    return (
        <div className="bg-[#010020] text-white">
        <Navbar />
        <div className="xl:w-1/3 w-11/12 mx-auto sm:pt-32 pt-20 sm:pb-20 pb-5">
          {/* Box */}
          <div className="flex my-12 sm:gap-7 gap-5">
            <div className="mt-3">
              <svg fill="#fff" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
            <div className="bg-[#581C87] p-4 sm:pl-6 rounded flex flex-col gap-3 relative">
              <h4 className="">
                <span className="bg-[#1B1934] p-2">Registration</span>
              </h4>
              <p className="sm:text-lg text-md ">
              Welcome to Zencon-2023, the ultimate destination for technology enthusiasts!
               To embark on your exciting journey, all you need to do is register for the event. 
               The registration process is quick and simple - just create your application by providing us with some basic information about yourself, your project, and your team (if applicable). By registering, you'll gain access to a plethora of cutting-edge technology sessions, workshops, and demonstrations, as well as a chance to network with like-minded individuals from around the world.
                So don't delay - register now and get ready to immerse yourself in the world of technology at Zencon-2023!

              </p>
              <p className="text-sm italic">27th of April until 15th of July </p>
              <div className="absolute top-5 left-[-10px] before:w-5 before:h-5 before:absolute before:left-0 before:top-0 before:content-[''] before:transform before:rotate-45 before:bg-[#581C87]"></div>
            </div>
          </div>

          <div className="flex my-12 sm:gap-7 gap-5">
            <div className="mt-3">
              <svg fill="#fff" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
            <div className="bg-[#581C87] p-4 pl-6 rounded flex flex-col gap-3 relative">
              <h4 className="">
                <span className="bg-[#1B1934] p-1">Presentation</span>
              </h4>
              <p className="sm:text-lg text-md">
              Congratulations! You have been selected for the next stage of Zencon-2023 RIO. As part of this stage, we request that you provide us with a video that effectively conveys the key idea behind your project. This video will serve as a powerful tool to showcase your project's potential, communicate your vision, and capture the attention of stakeholders. We believe that a well-crafted video will help us understand your project better and make informed decisions about its future. So, put your creativity to work and create a video that will leave a lasting impression on us! </p>
              <p className="text-sm italic">17th of July until 27th of July</p>
              <div className="absolute top-5 left-[-10px] before:w-5 before:h-5 before:absolute before:left-0 before:top-0 before:content-[''] before:transform before:rotate-45 before:bg-[#581C87]"></div>
            </div>
          </div>

          <div className="flex my-12 sm:gap-7 gap-5">
            <div className="mt-3">
              <svg fill="#fff" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
            <div className="bg-[#581C87] p-4 pl-6 rounded flex flex-col gap-3 relative">
              <h4 className="">
                <span className="bg-[#1B1934] p-1">Beginning of ZENCON</span>
              </h4>
              <p className="sm:text-lg text-md">
              Participants will meet and form teams of two (2) to six (6) Participants to focus on a single project of developing a prototype (hereafter referred to as “Team/s”). A Participant cannot be a part of more than one Team. Teams will have until September 20th at 11 am to develop their prototype.
              Then Presenting the prototype finally selection of the winners and the ZENCON results will be shared during the awards ceremony starting at 7 pm.
              </p>
              <p className="text-sm italic">16th of September until 21th of September</p>
              <div className="absolute top-5 left-[-10px] before:w-5 before:h-5 before:absolute before:left-0 before:top-0 before:content-[''] before:transform before:rotate-45 before:bg-[#581C87]"></div>
            </div>
          </div>
        </div>
        </div>
    )
}