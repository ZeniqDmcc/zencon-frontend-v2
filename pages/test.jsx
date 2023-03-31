import { useEffect,useState } from 'react'
import { nanoid } from 'nanoid'
const Test =()=>{
    const  randNum = nanoid()
    const [sessionId,setSessionId] = useState(null);
    const [ethWalletAddress,setEthWalletAddress] = useState(null);
    useEffect(() => {
        const session_id = localStorage.getItem("session_id")
        const eth_adr = localStorage.getItem("eth_adr")
        setSessionId(session_id)
        setEthWalletAddress(eth_adr)
      }, []);
    const body = JSON.stringify({
        first_name:"Ahmed",
        last_name:"Mahmoud",
        date_of_birth:"01/01/1992",
        email:`ahmed${randNum}.abdel${randNum}fatah@zeniq.com`,
        nationality:"Egyption",
        country_of_residancy:"Egypt",
        professional_status:"Software developer",
        company:"Intertech",
        session_id:sessionId,
        tshirt_size:"xl",
        job_title:"JS Developer",
        shorDescription:"I have a new project in IOT and it's a very nice project",
        github:`https://github.com/ZeniqDmcc${randNum}`,
        linkedin:`https://github.com/ZeniqDmcc${randNum}`,
        phone:`+97158588057${randNum}`
    });
    const register = ()=>{
        console.log(sessionId)
        fetch(`http://192.168.19.100:9003/api/v1/zencon/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "token":ethWalletAddress
            },
            body,
        }).then((response) => response.json()).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return <>
    <div style={{width:"100%",height:"500px"}}>
        <button style={{color:"white",padding:'100px',marginTop:"20px",background:"gray"}} onClick={register}>Register Participant!</button>
    </div>
    </>
}
export default Test;