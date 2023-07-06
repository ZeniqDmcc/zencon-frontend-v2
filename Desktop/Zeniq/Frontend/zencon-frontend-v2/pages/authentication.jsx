import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppQrCode from "../components/AppQrCode/AppQrCode";
import {useUserDataContext} from "../context/UserDataContextProvider";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";


const AuthenticationForm = () => {

    const customButtonStyle ="font-Hanson font-normal uppercase text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#fff] border-2 flex justify-center items-center border-white hover:bg-[#fff] hover:text-[#121212] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]"
    const ButtonGreenStyle = "font-Hanson uppercase font-normal text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]"

    const {
        socket,
        isAuthed,
        setIsAuthed,
        setUserType,
        setUserWallet,
        setEthAddr,
        setBtcAddr
    } = useUserDataContext();
  
    const router = useRouter();
    if(isAuthed){
        router.push("/dashboard")
    }
    
    const [iAmDeveloper, setIAmDeveloper] = useState(false);
    const [iAmInvestor, setIAmInvestor] = useState(false);    
    const [qrLink, setqrLink] = useState(null);
    
    useEffect(() => {
       
        if (socket) {
            if (iAmInvestor) {
                socket?.emit("login_inv_qr_link");
                socket?.on("qr_link", (data) => {
                    setqrLink(data);
                });
            }
            if (iAmDeveloper) {
                socket?.emit("login_dev_qr_link");
                socket?.on("qr_link", (data) => {
                    setqrLink(data);
                });
            }


            socket?.on("qr_login", data => {
                const { user_type, is_authed, auth_adr, eth_adr, btc_adr,comrade_rec_id} = data;
                if (is_authed) {
                    setIsAuthed(true);
                    localStorage.setItem("is_authed", is_authed.toString());
                }
                if (user_type) {
                    setUserType(user_type);
                    localStorage.setItem("user_type", user_type.toString());
                }
                if (auth_adr) {
                    setUserWallet(auth_adr);
                    localStorage.setItem("auth_adr", auth_adr.toString());
                }
                if (eth_adr) {
                    setEthAddr(eth_adr);
                    localStorage.setItem("eth_adr", eth_adr.toString());
                }
                if (btc_adr) {
                    setBtcAddr(btc_adr);
                    localStorage.setItem("btc_adr", btc_adr.toString());
                }
                if(comrade_rec_id){
                    localStorage.setItem("session_id", comrade_rec_id);
                }
                Cookies.set("isAuthed", is_authed);
                Cookies.set("userType", user_type);

                router.push("/dashboard");
            });

        }


    }, [socket, iAmDeveloper, iAmInvestor]);

    return (
        <>
            <Navbar/>
            <section className="py-14 pb-20 bg-[#010222] text-white h-[1106px]">
                <Container>
                    <h1 className="font-Hanson font-normal font-semibold text-3xl leading-10 text-center uppercase text-[#87FF4F] mt-[206px]">
                        Register / Login
                    </h1>
                    {!isAuthed && <div className="flex flex-row gap-6 flex-wrap  justify-center mt-[50px]">
                        <div onClick={() => {
                            setIAmInvestor(false);
                            setIAmDeveloper(true);
                        }}>
                            <a className={ButtonGreenStyle}>Developer Login</a>
                        </div>
                         
                        {/* <div onClick={() => {
                            setIAmInvestor(true);
                            setIAmDeveloper(false);
                        }}>
                            <CustomButton text='Sponsor Login' />

                        </div> */}

                    <div className="flex justify-center w-full my-16">

                        {qrLink && <AppQrCode
                            disabled={!iAmDeveloper}
                            title="Login as Developer"
                            description="Scan this code with Nomo app!"
                            uri={qrLink}
                        />}

                        {qrLink && <AppQrCode
                            disabled={!iAmInvestor}
                            title="Login as Sponsor"
                            description="Scan this code with Nomo app!"
                            uri={qrLink}
                        />}
                    </div>
                    </div>}
                </Container>
            </section>
            </>
    );
};

export default AuthenticationForm;
