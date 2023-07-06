import {NextSeo} from "next-seo";
import Container from "../components/Container/Container";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {useRouter} from "next/router";
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";
import Navbar from "../components/Navbar/Navbar";
import ButtonGroup from "../components/Molecules/ButtonGroup/ButtonGroup";
export default function Dashboard() {

    const {isAuthed, userWallet} = useUserDataContext();
    const router = useRouter();

    if(!isAuthed || !userWallet){
        return (
            <LoadingStyled redirectTo={"/"} timeToWait={2000} varsToWaitForArray={[isAuthed, userWallet]}/>
        )
    }

    return (
        <>
            <NextSeo
                title="ZENCON Launchpad | Incoming next"
                description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
            />
            <Navbar/>
                <section id='dashboard' className="grow py-14 bg-gray-900 bg-no-repeat bg-cover text-white h-[1106px]">
                    <Container>
                        <h1 className="mt-20 pt-20 mb-8 text-center text-7xl font-extrabold font-primary">
                            Welcome to Dashboard
                        </h1>
                        <div className="flex items-center justify-center p-8">
                        <ButtonGroup 
                            button2Link="/dashboard"
                            button2Text="Participate"
                            button1Link="/my-projects"
                            button1Text="Launchpad"
                        />
                        </div>
                    </Container>
                </section>
        </>
    );
}
