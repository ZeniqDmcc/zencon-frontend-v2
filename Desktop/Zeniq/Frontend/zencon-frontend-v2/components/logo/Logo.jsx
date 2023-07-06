import zenconLogo from "../../assets/zenconLogo.svg"
import logo from "../../public/assets/logo.svg"
import Image from 'next/image'
import styles from "./logo.module.css";
import Link from "next/link";

const Logo= ()=>{
    return <div className={`1024px:text-center ${styles.brand__icon}`}>
      <Link href="#">
        <><Image src={zenconLogo} alt="Logo"/></>
      </Link>
  </div>  
}

export default Logo