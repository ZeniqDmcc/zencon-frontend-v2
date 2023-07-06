import CommunityChannel from "../components/CommunityChannel/CommunityChannel";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import LaunchpadInfo from "../components/LaunchpadInfo/LaunchpadInfo";
import { Loading } from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import RegistrationForm from "../components/Registration";
import useFetchWithToken from '../hooks/useFetchWithToken';
import { zencon_event_api_url } from "../utils/Constants/BackendURLs";
import UI_PATHS from "../utils/Constants/uiPaths";

export default function Register() {
    let {data, loading,token } = useFetchWithToken(`${zencon_event_api_url}/${UI_PATHS.PARTICIPANT_STATUS}`);
    if(loading) return <Loading></Loading>;
    return (
        <>
        <Navbar />
            {data && data.participant ?  (
                <div className="lg:pt-[217px] pt-[152px]">
                { data.isRegistrationEnabled && <ContactDetails firstName={data.participant['first_name']} lastName={data.participant['last_name']} isAccepted={data.participant['is_accepted']} status={data.participant['status']} email="hello@zencon.io"/> }
                <LaunchpadInfo />
                <CommunityChannel />
              </div>
            ) : data.isRegistrationEnabled ? <RegistrationForm ethAddr={token}/> :<div className="lg:pt-[217px] pt-[152px]"><LaunchpadInfo /><CommunityChannel /></div>}
        </>
    );
}
