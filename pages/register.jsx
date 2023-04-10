import Navbar from "../components/Navbar/Navbar"
import RegistrationForm from "../components/Register"
import useFetchWithToken from '../hooks/useFetchWithToken';

export default function Register() {
    const {data, error, loading,token } = useFetchWithToken("http://192.168.19.100:9003/api/v1/zencon/participant/status");

    if (loading) {
        // Show a loading spinner or skeleton screen while data is being fetched
        return null;
    }

    if (error) {
        // Handle the error state here, e.g. show an error message or redirect to a different page
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Navbar />
            {data ? (
                <div className="pt-32 bg-white md:h-[700px] sm:w-10/12 mx-auto">dfgtertyuretyu
                    <h3 className='font-extrabold font-primary text-gray-900 text-center text-3xl mt-10 mb-16'>Hi  &#128075; {data.first_name} {data.last_name} you have already registered in &#128640; &#128293; RIO-2023 &#128293; &#128640;</h3>
                    <div className="container mx-auto pt-4">
                        <div className="shadow-md py-50 p-10">
                            <p className='text-green-700'>Lorem ipsum dolor sidghryghrtyt amet consectetur adipisicing elit. Suscipit unde mollitia error ipsum magni veniam nesciunt vero facilis pariatur. Asperiores, quidem aut perferendis accusantium mollitia recusandae illum voluptas ex unde.</p>
                            <ul>
                                <li>Application status: {
                                    data.shortlisted === true ? <span>Shortlisted &#128640; &#128640;</span> :
                                        data.shortlisted === false ? <span>Rejected</span> :
                                            <span> &#128064; Under Review </span>}</li>
                            </ul>

                            <div className='mt-10'>
                                For More information feel free to contact us<br />
                                Email &#128235;: office@zeniq.com
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <RegistrationForm ethAddr={token}/>
            )}
        </>
    );
}
