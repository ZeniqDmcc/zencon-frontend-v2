import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar"
import RegistrationForm from "../components/Register"
import {useUserDataContext} from "./../context/UserDataContextProvider";
import { useRouter } from "next/router";

export default function Register() {
    const router = useRouter();
    const [data, setData] = useState(null)

    const {
        ethAddr,
    } = useUserDataContext();
  
    useEffect(() => {
        fetch('http://192.168.19.100:9003/api/v1/zencon/participant/status',{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "token":ethAddr
            },
        })
        .then(response => {
            if(response.status===401){
                router.push("/authentication")
            }
            return response.json()
        })
        .then(data => {
           
            const {data:{participant}} = data;
            console.log(participant)
            setData(participant);
        })
        .catch(error => {
            router.push("/")
        });
      }, [])

    
    return <>
        <Navbar/>
        {data?<div className="pt-32 bg-white md:h-[700px] sm:w-10/12 mx-auto">
                <h3 className='font-extrabold font-primary text-gray-900 text-center text-3xl mt-10 mb-16'>Hi  &#128075; {data.first_name} {data.last_name} you have already registered in &#128640; &#128293; RIO-2023 &#128293; &#128640;</h3>
                <div className="container mx-auto pt-4">
                    <div className="shadow-md py-50 p-10">
                    <p className='text-green-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde mollitia error ipsum magni veniam nesciunt vero facilis pariatur. Asperiores, quidem aut perferendis accusantium mollitia recusandae illum voluptas ex unde.</p>
                        <ul>
                            <li>Application status: {
                            data.shortlisted===true?
                                <span>Shortlisted &#128640; &#128640;</span>:data.shortlisted===false?
                                    <span>Rejected</span>:<span> &#128064; Under Review </span>}</li>
                        </ul>

                        <div className='mt-10'>
                        For More information feel free to contact us<br/>
                        Email &#128235;: office@zeniq.com
                        </div>
                    </div>
                    </div>
        </div>:<RegistrationForm ethAddr={ethAddr}/>}
        
    </>
}
