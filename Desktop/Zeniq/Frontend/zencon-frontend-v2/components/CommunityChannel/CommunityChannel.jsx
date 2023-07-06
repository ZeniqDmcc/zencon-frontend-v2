import CustomButton from "../Atoms/Button/CustomButton"
import Paragraph from "../Atoms/Paragraph/Paragraph"

function CommunityChannel() {

    const headingStyle = "font-Hanson text-[#87FF4F] text-[32px] uppercase font-bold leading-[40px] 1024px:text-2xl 767px:text-xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6"

  return (
    <div className="bg-[#000E2A]">
        <div className="max-w-[763px] mx-auto text-center flex flex-col items-center gap-7 640px:max-w-[90%] 1024px:mt-[60px] 640px:mt-[50px] 640px:py-[60px] 1024px:py-[65px] py-[130px] px-5 mt-28">
            <h2 className={headingStyle}>Join our<br />Community Channels</h2>
            <Paragraph text="If you want be fully integrated with ZENIQ's community, check out all our communication channels to be up to date to the latest news and events of ZENIQ." />
            <CustomButton text="Explore ZENIQ" href="https://zeniq.com/" />
        </div>
    </div>
  )
}

export default CommunityChannel