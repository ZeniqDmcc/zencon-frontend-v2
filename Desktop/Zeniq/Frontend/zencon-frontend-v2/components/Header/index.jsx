import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.svg"

function Header() {
    return <header>
        <div className="container w-full px-4 py-[13px] mx-auto">
            <div className="flex items-center justify-between columns-2">
            <Link href="/" scroll={false}>
            <a>
              <Image src={logo} alt="ZENCON" priority={true} />
            </a>
          </Link>
            </div>
        </div>
    </header>
}

export default Header