import Logo from "../logo/Logo"
import Nav from "../nav/Nav"

function Header() {
    return <header className="py-0">
        <div className="container mx-auto">
            <div className="flex columns-2 justify-between items-center">
                <Logo />
                <Nav />
            </div>
        </div>
    </header>
}

export default Header