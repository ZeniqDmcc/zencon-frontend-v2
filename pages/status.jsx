import ContactDetails from "../components/ContactDetails/ContactDetails";
import Navbar from "../components/Navbar/Navbar";
import StatusCircle from "../components/StatusCircle/StatusCircle";

function Status() {
    return (
        <div className="status">
            <Navbar />
            <div className="flex max-w-4xl mx-auto  pt-32 pb-16 justify-between">
                <StatusCircle />
                <ContactDetails />
            </div>
        </div>
    )
}

export default Status