import {NextSeo} from "next-seo";
import Container from "../components/Container/Container";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import {useEffect} from "react";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {useRouter} from "next/router";
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";
import CallToAction from "../components/Buttons/CallToAction";

export default function Dashboard() {

    const {isAuthed, userWallet, ethAddr, btcAddr} = useUserDataContext();
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
            <PageWrapper>
                <section id='dashboard' className="grow py-14 bg-gray-900 bg-no-repeat bg-cover text-white h-[800px]">
                    <Container>
                        <h1 className="mt-20 pt-20 mb-8 text-center text-7xl font-extrabold font-primary">
                            Welcome to Dashboard
                        </h1>
                        {/*<p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">*/}
                        {/*    {"Wallet address: " + userWallet}*/}
                        {/*</p>*/}
                        {/*<p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">*/}
                        {/*    {"ETH address: " + ethAddr}*/}
                        {/*</p>*/}
                        {/*<p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">*/}
                        {/*    {"BTC address: " + btcAddr}*/}
                        {/*</p>*/}

                        <div className="flex items-center justify-center">
                            <CallToAction
                                text="My Projects"
                                classes="w-full"
                                link="/my-projects"
                            />
                        </div>
                    </Container>
                </section>
            </PageWrapper>
        </>
    );
}
