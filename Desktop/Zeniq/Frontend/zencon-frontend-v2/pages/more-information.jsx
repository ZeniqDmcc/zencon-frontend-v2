import Heading from "../components/Atoms/Headings/Heading";
import MoreInfoOrg from "../components/MoreInfoOrg/MoreInfoOrg";
import Navbar from "../components/Navbar/Navbar";

export default function MoreInformationScreen() {
  return (
    <div className="bg-[#010020] text-white">
      <Navbar />
      <div className="lg:pb-[124px] pb-[65px] lg:pt-[200px] pt-[135px]">
        <div className="bg-moreInfo 1024px:bg-none ">
          <div className="bg-moreInfo-inner 1024px:bg-none">
            <div className="container w-full py-2 mx-auto">
              <div className="mb-[35px] lg:ml-[30px]">
                <Heading level="1">Zencon Phases</Heading>
              </div>
              <div className="flex flex-col gap-[30px] 1024px:pl-0 lg:w-[65%] 1024px:w-[78%] 940px:w-[100%]  text-justify 640px:text-left lg:border-l-2 lg:pl-[30px]">
                <MoreInfoOrg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
