import ContactDetails from "../components/ContactDetails/ContactDetails";
import Navbar from "../components/Navbar/Navbar";
import StatusCircle from "../components/StatusCircle/StatusCircle";

function Status() {
    return (
        <div className="status bg-[#010020]">
            <Navbar />
            <div className="flex max-w-4xl mx-auto  pt-40 pb-24 justify-between h-4/6">
                {/* <StatusCircle /> */}
                <ContactDetails />
            </div>
        </div>
    )
}

export default Status