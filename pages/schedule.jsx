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
                <span className="bg-[#1B1934] p-1">Primary</span>
              </h4>
              <p className="sm:text-lg text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="text-sm italic">1 Hours Ago</p>
              <div className="absolute top-5 left-[-10px] before:w-5 before:h-5 before:absolute before:left-0 before:top-0 before:content-[''] before:transform before:rotate-45 before:bg-[#581C87]"></div>
            </div>
          </div>

          <div className="flex my-12 sm:gap-7 gap-5">
            <div className="mt-3">
              <svg fill="#fff" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
            <div className="bg-[#581C87] p-4 pl-6 rounded flex flex-col gap-3 relative">
              <h4 className="">
                <span className="bg-[#1B1934] p-1">Danger</span>
              </h4>
              <p className="sm:text-lg text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="text-sm italic">1 Hours Ago</p>
              <div className="absolute top-5 left-[-10px] before:w-5 before:h-5 before:absolute before:left-0 before:top-0 before:content-[''] before:transform before:rotate-45 before:bg-[#581C87]"></div>
            </div>
          </div>

          <div className="flex my-12 sm:gap-7 gap-5">
            <div className="mt-3">
              <svg fill="#fff" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
            <div className="bg-[#581C87] p-4 pl-6 rounded flex flex-col gap-3 relative">
              <h4 className="">
                <span className="bg-[#1B1934] p-1">Primary</span>
              </h4>
              <p className="sm:text-lg text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="text-sm italic">1 Hours Ago</p>
              <div className="absolute top-5 left-[-10px] before:w-5 before:h-5 before:absolute before:left-0 before:top-0 before:content-[''] before:transform before:rotate-45 before:bg-[#581C87]"></div>
            </div>
          </div>
        </div>
        </div>
    )
}