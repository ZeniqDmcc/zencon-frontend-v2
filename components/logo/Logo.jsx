import Link from "next/link"
import zenconLogo from "../../assets/zenconLogo.svg"
import Image from 'next/image'
import styles from "./logo.module.css";


const Logo= ()=>{
    return <div className={`h-100 ${styles.brand__icon}`}>
    <Link href="/">
      <Image src={zenconLogo} alt="Logo"/>
    </Link>
  </div>  
}
export default Logo