import CommunityChannel from "../components/CommunityChannel/CommunityChannel";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import LaunchpadInfo from "../components/LaunchpadInfo/LaunchpadInfo";
import Navbar from "../components/Navbar/Navbar";

function status() {
  return (
    <div>
      <Navbar />
      <div className="lg:pt-[217px] pt-[152px]">
        <ContactDetails />
        <LaunchpadInfo />
        <CommunityChannel />
      </div>
    </div>
  );
}

export default status;
