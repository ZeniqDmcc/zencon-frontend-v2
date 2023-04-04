import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar"
import RegistrationForm from "../components/Register"
import {useUserDataContext} from "./../context/UserDataContextProvider";

export default function Register() {
    const {
        ethAddr,
    } = useUserDataContext();
    useEffect(()=>{

    });[]
    const checkRegistration = ()=>{
    }
    return <>
        <Navbar/>
        <RegistrationForm ethAddr={ethAddr}/>
    </>
}