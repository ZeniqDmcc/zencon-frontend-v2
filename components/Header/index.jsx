import Logo from "../logo/Logo"
import Nav from "../nav/Nav"
import styles from "./header.module.css"

function Header() {
    return <header className={styles.header}>
        <div className="container mx-auto">
            <div className={styles.header__inner}>
                <div className={styles.box}>
                    <Logo />
                </div>
                <div className={styles.box}>
                    <Nav />
                </div>
            </div>
        </div>
    </header>
}

export default Header